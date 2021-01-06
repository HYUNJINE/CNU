#include<string>
#include<vector>
#include<iostream>
using namespace std;
class Contact {
private: 
	string n;
	string t;
public:
	Contact(string name= "", string telephone = "") {
		n = name;
		t = telephone;
	}
	string getName() {
		return n;
	}
	string getTelephone() {
		return t;
	}
	void print() {
		cout << n;
	}
};

int main(){
	vector<Contact> vec;

	Contact c1("김철수", "010-1234-5678");
	Contact c2("이현진", "010-1234-5678");
	Contact c3("유재석", "010-9876-4321");
	vector<Contact>::iterator iter = vec.begin();

	int count = 0;
	vec.push_back(c1);
	vec.push_back(c2);
	vec.push_back(c3);
	string inputname;
	cout << "전화번호를 찾는 이름: ";
	cin >> inputname;
	
	for (auto p = vec.begin(); p != vec.end(); p++) {
		if ((*p).getName() == inputname) {
			cout << (*p).getName() + " 의 전화번호는" + (*p).getTelephone() + " 입니다";
			count++;
		}
		
	}
	if (count == 0) {
		cout << "sorry not found.";
	}
		
	return 0;

}