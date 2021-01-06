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
		
		cout << "å���� : " << n << endl;
		cout << "�� �� : " << p << endl;
	}
	void printbest() {
		cout << "���� ��� å" << endl;
		cout << "å���� : " << n << endl;
		cout << "�� �� : " << p << endl;
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
		cout << "�����Է� :";
		cin >> name;
		cout << "���� �Է� : ";
		cin >> price;
		book[i].setName(name);
		book[i].setPrice(price);
	}
	cout << "�迭���" << endl;
	for (int i = 0; i < 3; i++) {
		book[i].print();
	}

	cout << "���� ��� å" << endl;
	compare(book, 3).print();
	return 0;
}