#include<string>
#include<vector>
#include<iostream>
#include<algorithm>
using namespace std;
class Student {
private:
	string n;
	double s;
	
public: 
	Student(string name = "", double score = 0.0) {
		n = name;
		s = score;
	}
	double getScore() {
		return s;
	}
	string getName() {
		return n;
	}
	void print() {
		cout << "이름 : " + n << endl;
		cout << "점수 : " << s << endl;
	}
};
bool compare(Student a, Student n) {
	if (a.getScore() < n.getScore()) {
		return true;
	}
	else {
		return false;
	}
}

int main() {
	vector<Student> vec;
	string name;
	double score;
	for (int i = 0; i < 3; i++) {
		cout << "이름 :";
		cin >> name;
		cout << "학점 :";
		cin >> score;
		Student s(name, score);
		vec.push_back(s);
	}
	
	int i = 0;
	
	cout << "벡터 출력" << endl;
	for ( auto p = vec.begin(); p != vec.end(); p++) {
		
		(*p).print();
	}
	sort(vec.begin(), vec.end(), compare);
	cout << "벡터 정렬 후 출력" << endl;
	for (auto p = vec.begin(); p != vec.end(); p++) {
		(*p).print();
				
	}
	return 0;
}