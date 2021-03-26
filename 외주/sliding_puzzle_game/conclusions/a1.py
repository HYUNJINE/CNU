"""
Sliding Puzzle Game
Assignment 1
Semester 1, 2021
CSSE1001/CSSE7030
"""
import math
from typing import Optional

from a1_support import *

# Replace these <strings> with your name, student number and email address.
__author__ = "<Jihyun Kim>, <s4579620>"
__email__ = "<s4579620@student.uq.edu.au>"

play = True
select_level = True


def shuffle_puzzle(solution: str) -> str:
    """
    Shuffle a puzzle solution to produce a solvable sliding puzzle.

    Parameters:
        solution (str): a solution to be converted into a shuffled puzzle.

    Returns:
        (str): a solvable shuffled game with an empty tile at the
               bottom right corner.

    References:
        - https://en.wikipedia.org/wiki/15_puzzle#Solvability
        - https://www.youtube.com/watch?v=YI1WqYKHi78&ab_channel=Numberphile

    Note: This function uses the swap_position function that you have to
          implement on your own. Use this function when the swap_position
          function is ready
    """
    shuffled_solution = solution[:-1]

    # Do more shuffling for bigger puzzles.
    swaps = len(solution) * 2
    for _ in range(swaps):
        # Pick two indices in the puzzle randomly.
        index1, index2 = random.sample(range(len(shuffled_solution)), k=2)
        shuffled_solution = swap_position(shuffled_solution, index1, index2)

    return shuffled_solution + EMPTY


# Write your functions here
def print_grid(puzzle: str) -> None:
    if math.pow(math.sqrt(len(puzzle)), 2) == len(puzzle):
        index = 0
        row_len = int(math.sqrt(len(puzzle)))
        line = CORNER + HORIZONTAL_WALL * 3
        for i in range(row_len):
            print(line * row_len + CORNER)
            for k in range(row_len):
                print(VERTICAL_WALL, puzzle[index], end=" ")
                index += 1
            print(VERTICAL_WALL)
        print(line * row_len + CORNER)
        return
    else:
        index = 0
        row_len = int(math.sqrt(len(puzzle) + 1))
        line = CORNER + HORIZONTAL_WALL * 3
        for i in range(row_len):
            print(line * row_len + CORNER)
            for k in range(row_len):
                print(VERTICAL_WALL, puzzle[index], end=" ")
                index += 1
            print(VERTICAL_WALL)
        print(line * row_len + CORNER)
        return


def swap_position(puzzle: str, from_index: int, to_index: int) -> str:
    puzzle = list(puzzle)
    puzzle[from_index], puzzle[to_index] = puzzle[to_index], puzzle[from_index]
    puzzle = "".join(puzzle)
    return puzzle


def move(puzzle: str, direction: str) -> Optional[str]:
    index = puzzle.find(" ")
    if direction == RIGHT:
        puzzle = swap_position(puzzle, index, index+1 )
        return puzzle
    elif direction == UP:
        puzzle = swap_position(puzzle, index, index - int(math.sqrt(len(puzzle))))
        return puzzle
    elif direction == DOWN:
        puzzle = swap_position(puzzle, index, index + int(math.sqrt(len(puzzle))))
        return puzzle
    elif direction == LEFT:
        puzzle = swap_position(puzzle, index, index - 1)
        return puzzle


def print_solution_and_cur_pos(solution: str, current: str) -> None:
    print("Solution:")
    print_grid(solution)
    print("Current position:")
    print_grid(current)
    return

def check_win(puzzle: str, solution: str) -> bool:
    if puzzle[:-1] == solution[:-1]:
        return True
    else:
        return False

def if_win_print(puzzle: str, solution: str) -> None:
    global play
    global select_level
    print(WIN_MESSAGE)
    print(PLAY_AGAIN_PROMPT, end="")
    if input() == "n":
        print(BYE)
        play = False

    else:
        select_level = True

def main():
    """Entry point to gameplay"""
    global play
    global select_level
    print(WELCOME_MESSAGE)
    print("")

    while play:
        if select_level:
            print(BOARD_SIZE_PROMPT, end="")
            level = int(input())
            solution = get_game_solution(WORDS_FILE, level)
            current = shuffle_puzzle(solution)
            print_solution_and_cur_pos(solution, current)
            select_level = False
        print(DIRECTION_PROMPT, end="")
        direction = input()
        cur_pos = current.index(" ")
        row_cell_count = int(math.sqrt(len(solution)))
        if direction == "H":
            print(HELP_MESSAGE)
            print_solution_and_cur_pos(solution, current)
        elif direction == "GU":
            print(GIVE_UP_MESSAGE)
            print(PLAY_AGAIN_PROMPT, end='')
            if input() == "n":
                print(BYE)
                play = False
            else:
                select_level = True
        elif direction == RIGHT:
            if cur_pos % row_cell_count == row_cell_count - 1:
                print(INVALID_MOVE_FORMAT.format(RIGHT))
                print_solution_and_cur_pos(solution, current)
            else:
                current = move(current, RIGHT)
                if check_win(current, solution):
                    if_win_print(current, solution)
                else:
                    print_solution_and_cur_pos(solution, current)

        elif direction == UP:
            if cur_pos <= row_cell_count - 1:
                print(INVALID_MOVE_FORMAT.format(UP))
                print_solution_and_cur_pos(solution, current)
            else:
                current = move(current, UP)
                if check_win(current, solution):
                    if_win_print(current, solution)
                else:
                    print_solution_and_cur_pos(solution, current)

        elif direction == DOWN:
            if row_cell_count ** 2 - 1 >= cur_pos >= row_cell_count ** 2 - row_cell_count:
                print(INVALID_MOVE_FORMAT.format(DOWN))
                print_solution_and_cur_pos(solution, current)
            else:
                current = move(current, DOWN)
                if check_win(current, solution):
                    if_win_print(current, solution)
                else:
                    print_solution_and_cur_pos(solution, current)

        elif direction == LEFT:
            if cur_pos % row_cell_count == 0:
                print(INVALID_MOVE_FORMAT.format(LEFT))
                print_solution_and_cur_pos(solution, current)
            else:
                current = move(current, LEFT)
                if check_win(current, solution):
                    if_win_print(current, solution)
                else:
                    print_solution_and_cur_pos(solution, current)
        else:
            print(INVALID_MESSAGE)
            print_solution_and_cur_pos(solution, current)


if __name__ == "__main__":
    main()
