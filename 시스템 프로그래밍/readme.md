# System Programming 

embedded operating system 


하드웨어와 가장 처음 맞물리는 부분을 Architecture dependent kernel 이라고한다. (x86, ARM 이런거)
다양한 스펙의 하드웨어가 존재하는데 여러가지를 통칭해서 Architecture 이라고한다. 하드웨어에 dependent 하게 맞춰줘야하니까, 이게 필요하다. 그 위에 kernel 이라고 하는 부분이 존재하는데 os안에서 운영체제 os의 core부분이다. kernel에는 많은 기능들이 있다. 커널안에는 file systems 기능 , inter-process communication i/o device management, process management 등이 존재

FAT 는 파일시스템

커널의 파일시스템은 매우 중요하다!!

각 os마다 폴더 파일 관리 방법이 다르고, 서로다른 파일시스템은 호환이 되지 않는다. 어떤 파일 시스템이 됬든간에 커널의 주요기능중 하나이다. 컴퓨터 os는 내부적으로 동작을 할 때 기본 단위는 프로세스이고, 프로세스들이 여러가지가 생길 수 있고 없어질수 있고 바뀌기도한다. 이를 잘 관리해야하는데, 이부분을 커널이 해준다. 커널의 가장핵심은 process management 와 file systems 이다.
커널위에 system call interface 가 있다. 커널을 쓰려면 system call interface 가 필요.
우리가 프로그램을 짜는데, 파일을 오픈해야하거나 ,파일을 저장해야하거나, 해야하는데 시스템 콜 인터페이스를 이용해서 os와 서로 서로 내용들을 주고받을 수 있다. 

History of MicroProcessors

- Microprocessors are first introduced by intel in 1971
- intel 8085 has an internal memory
- 4 bit microprocessor -> 8bit microprocessor -> 16bit microprocessor -> 32 -> 64bit
- Cache memory was introduced with Intel 80486
- Dual core processors with multi-threading
- Multi-core or multi-processors for servers

프로세서 클럭 스피드를 더빠르게 동작시키기 어려워지자, 인텔이 병렬 프로세싱을 결정하된다. 이제 코어 여러개 가져다가 박는거지.

하드웨어적으로 프로세서가 코어를 여러개 가지게 되면 os가 잘 이용할 수 있도록 구성이 되어야한다. 하드웨어의 상태 , 기능들을 고려해서 프로그래밍을 하면 좋다.

운영체제의 역사는 50년대부터 시작한다. 50년대에는 메인프레임이라고 하는 하드웨어가있다. 엄청크고, 운영체제로 돌아가는게 아니고, 각자 자신의 os가 있다. single stream batch processing . 이당시에는 하드웨어가 개비싸. 이 하드웨어를 공유해서 쓰고싶어 -> Unix 의 focus 는 컴퓨터를 수많은 사람들이 어떻게 공유해서 쓸 수 있을까? (multiuser OS was needed) 
70년도에는 personal computer 개념이 시작된다. IBM, Apple2
80년도에는 마이크로프로세서, personal 컴퓨터가 널리쓰이게되고, IBM에서 마이크로소프트에 OS개발을 요청 이때 개발한 운영체제는 DOS 이다. 도스는 command line os and backward compatible with CP/M

1990년대 이후 마이크로프로세서 엄청빠른 속도로 발전, 멀티 스레딩, 멀티 프로세싱 

types of operating systems

- simple batch system
- multiprogramming batch system (time-sharing systems)
- multiprocessor system
- distributed operating system
- real-time operating system

리눅스

- Unix-like operating system
- First developed by Linus Torvald in 1991
- Linux is based on a free source code version of UNIX
- this source is complied to intel CPU machine code
- you can run UNIX-based code on cheap PC hardware
- internal sw architecure is circa 1960's (A multi-user OS for a single-user machine)
- Runs on many different haradware platforms


> C program development Environment

Editor -> preprocessor ( preprocessor program processess the code) -> compiler (compiler creates object code and stores it on disk) -> linker (linker links the object code with the libraries) -> loader (loader puts program in memory) ->  CPU takes each instruction and executes it, possibly storing new data values as the program executes

리눅스 환경에서는 Vi 가 가장 많이 쓰인다.

starting vi 

opening an existing file -> vi filename 

creating an new file -> vi filename

윈도우에는 모든 파일이 확장자가 있다. 
리눅스에서는 확장자 개념이 없다. 여기서는 파일들을 분류하는 방법이 read write execute (rwx) 권한 설정도 중요.
확장자 없이 써도된다.

vi는 command 모드와 editing mode 가 있다. 

editing mode 로 갈려면 a 또는 i 를 누른다.

- Exiting vi
    
    :q Quit the editor

    :q! Quit without saving changes to the file

- Saving changes in vi
  
    :wq write/save changes and quit

    :w write/save changes but don't quit

- Moving the curosr in vi

    h j k l 

- deleting in vi

    - x: delete 1 character under the cursor.
    - 2x: delete 2 character (3x, etx)
    - u: undo the last change to the file
    - dd: delete the line with the cursor
    - 2dd delete 2lines(from the line with the cursor to the next)
    - s substitute the character
    - d^ deletes from cursor position to the beginning of the line
    - d$ deletes from current cursor position to the end of the line
    - dw: deletes from current cursor position to the end of the word
    - p: paste lines below current line
    - yy: yank (copy) a single line
