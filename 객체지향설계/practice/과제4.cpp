#include<string>
#include<vector>
#include<iostream>

using namespace std;
class Date {
private:
	string y;
	string m;
	string d;
public :
	Date(string year = "1900", string month = "1", string day = "1") {
		y = year;
		m = month;
		d = day;
	}
	void print() {
		 cout << y << "��" << m << "��" << d <<"��" << endl;

	}
	string getYear() {
		return y;
	}
}; 
class Employee {
private:
	string n;
	Date b;
	Date h;
	int year1, month1, day1, year2, month2, day2;
public:
	Employee(string name, Date &birth, Date &hire) {
		n = name;
		b = birth;
		h = hire;
	}
	Employee(string name, int y1, int m1, int d1, int y2, int m2, int d2) {
		n = name;
		year1 = y1;
		month1 = m1;
		day1 = d1;
		year2 = y2;
		month2 = m2;
		day2 = d2;
	}
	void print() {
		cout << "�̸�: " << n << endl;
		cout << "����: ";
		b.print();
		cout << "�Ի���: ";
		h.print();
	}
	void difprint() {
		cout << "�̸�: " << n << endl;
		cout << "����: " << year1 << "��" << month1 << "��" << day1 << "��" <<endl;
		cout << "�Ի���: " << year2 << "��" << month2 << "��" << day2 << "��" << endl;
		
	}
	int getYear() {
		return year2;
	}
};
void whoisfast(Date e1, Employee e2) {
	
	if (stoi(e1.getYear()) > e2.getYear()) {
		cout<< "�̿��� ������ ȫ�浿 �������� �Ի�⵵�� ����";
	}
	else {
		cout << "ȫ�浿 ������ �̿��� �������� �Ի�⵵�� ����";
		
	}
	
}
int main() {
	Date d1("1995", "7", "1");
	Date d2("2020", "1", "1");
	Employee e1("ȫ�浿", d1, d2);
	e1.print();
	Employee e2("�̿���", 1999, 12, 30, 2019, 3, 1);
	e2.difprint();
	whoisfast(d2,e2);
	return 0;
}