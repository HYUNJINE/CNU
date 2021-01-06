#include<string>
#include<vector>
#include<iostream>
#include<algorithm>

using namespace std;

class Book {
private: 
	string n;
	int p;
public:
	Book(string name = "", int price = 0) {
		n = name;
		p = price;
	}
	void print() {
		
		cout << "책제목 : " << n << endl;
		cout << "가 격 : " << p << endl;
	}
	void printbest() {
		cout << "가장 비싼 책" << endl;
		cout << "책제목 : " << n << endl;
		cout << "가 격 : " << p << endl;
	}
	void setName(string name) {
		n = name;
	}
	void setPrice(int price) {
		p = price;
	}
	int getPrice() {
		return p;
	}
	string getName() {
		return n;
	}
};

Book compare(Book book[],int len ) {
	int max = 0;
	int index = 0;
	for (int i = 0; i < len; i++) {
		if (book[i].getPrice() > max) {
			max = book[i].getPrice();
			index = i;
		}
	}
	return book[index];
	
}
int main() {
	Book book[3];
	string name;
	int price;
	for (int i = 0; i < 3; i++) {
		cout << "제목입력 :";
		cin >> name;
		cout << "가격 입력 : ";
		cin >> price;
		book[i].setName(name);
		book[i].setPrice(price);
	}
	cout << "배열출력" << endl;
	for (int i = 0; i < 3; i++) {
		book[i].print();
	}

	cout << "가장 비싼 책" << endl;
	compare(book, 3).print();
	return 0;
}