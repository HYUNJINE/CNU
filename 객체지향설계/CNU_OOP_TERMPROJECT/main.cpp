#include<string>
#include<vector>
#include<sstream>
#include<fstream>
#include<iostream>



using namespace std;

int curPage = 0;
string message="";

void printConsole(vector<string> lines,int curPage) {
	for (int i = 0; i < 20; i++) {
		printf("%2d |  ", i + 1);
		if ((curPage * 20 + i) >= lines.size()) cout << "" << endl;
		else cout << lines[curPage * 20 + i] << endl;
	}
}
void printLine() {
	cout << "--------------------------------------------------------------------------------------" << endl;
}
void printcmd() {
	cout << "n: ����������, p: ����������, i : ����, d : ����, c: ����, s: ã��, t: ������ ����" << endl;
}
void printConsoleMessage(string message){
	cout << "(�ָܼ޼���) " << message << endl;

}
string cmd() {
	string command;
	cout << "�Է�: ";
	cin >> command;
	return command;
}
char cmdtochar(string command) {
	char charcmd = command[0];
	return charcmd;
}
void parseparams(vector<string> &params, string command) {
	string param;
	params.clear();
	command = command.substr(2, command.length()-3);
	istringstream ss(command);
	while (getline(ss, param, ','))
	{
		params.push_back(param);
	}
}
void initVector(vector<string>& lines) {
	
	vector<string> temp;
	string word = "";
	string line = "";
	string full = "";
	for (int i = 0; i < lines.size(); i++) {
		full += lines[i];
	}

	istringstream ss(full);
	
	while (getline(ss, word, ' ')) {
		if (line.length() + word.length()  > 74) {
			temp.push_back(line);
			line = "";
		}
		line += word + " ";
	}
	if (line != "") { temp.push_back(line); }

	lines.clear();
	lines.assign(temp.begin(), temp.end());
}

class Strategy {
public:
	virtual string instruct(vector<string>& lines, vector<string>& params, int& lineIndex) = 0;
};
class Next : public Strategy {
public:
	string instruct(vector<string>& lines, vector<string>& params, int& lineIndex) {
		curPage++;
		if (curPage * 20 >= lines.size()) {
			curPage--;
			message = "������ ������ �Դϴ�.";
			return message;
		}
		else {
			message = "���� ������ �Դϴ�.";
			return message;
		}
	}
};
class Previous : public Strategy {
public:
	string instruct(vector<string>& lines, vector<string>& params, int& lineIndex) {
		if (curPage == 0) {
			message = "ù ��° ������ �Դϴ�.";
			return message;
		}
		else {
			curPage--;
			message = "���� ������ �Դϴ�.";
			return message;
		}
	}

};
class Insert : public Strategy {
public:
	int wheretoinsertIndex;
	string word;
	vector<string> words;

	string instruct(vector<string>& lines, vector<string>& params, int& lineIndex) {
		try {
			if (params.size() != 3) {
				return "�Էµ� ������ ���� ������ Ȯ���ϼ���.";
			}
			if (params[2].length() > 75) {
				return "75����Ʈ �̻� ��ºҰ���.�ٽ��Է��ϼ���.";
			}
			for (int i = 0; i < params[0].length(); i++) {
				if (!isdigit(params[0][i])) return "���ڸ� �Է��ϼ���.";
			}
			for (int i = 0; i < params[1].length(); i++) {
				if (!isdigit(params[1][i])) return "���ڸ� �Է��ϼ���.";
			}
		}
		catch (invalid_argument e){
			message = "�ٽ� �Է��ϼ���";
		}

		lineIndex= stoi(params[0]) - 1;
		wheretoinsertIndex = stoi(params[1]) - 1;
		word = params[2];
		string line = lines[lineIndex];
		istringstream ss(line);
		string stringBuffer;
		while (getline(ss, stringBuffer, ' ')) {
			words.push_back(stringBuffer);
		}
		words.insert(words.begin() + wheretoinsertIndex + 1, word);

		string makeline = "";
		for (int i = 0; i < words.size(); i++) {
			makeline += words[i] + " ";
		}

		lines[lineIndex] = makeline;
		

		return "insert ����";
		
	}

};
class Delete : public Strategy {
public:
	int wheretodeleteIndex;
	string word;
	vector<string> words;
	string instruct(vector<string>& lines, vector<string>& params, int& lineIndex) {
		try {
			if (params.size() != 2) {
				return "�Էµ� ������ ���� ������ Ȯ���ϼ���.";
			}
		}
		catch (invalid_argument e) {
			message = "�ùٸ��� ���� �Է��Դϴ�.";
		}
		lineIndex = stoi(params[0]) - 1;
		wheretodeleteIndex = stoi(params[1]) - 1;
		string line = lines[lineIndex];
		istringstream ss(line);
		string stringBuffer;
		vector<string> words;
		words.clear();
		while (getline(ss, stringBuffer, ' '))
		{
			words.push_back(stringBuffer);
		}
		words.erase(words.begin() + wheretodeleteIndex);
		string makeline = "";
		for (int i = 0; i < words.size(); i++) {
			makeline += words[i] + ' ';
		}
		lines[lineIndex] = makeline;
		return "delete ����";
	}
	

};
class Change : public Strategy {
public:
	string instruct(vector<string>& lines, vector<string>& params, int& lineIndex) {
		string curStr;
		string prevStr;
		string line;
		vector<string> words;
		words.clear();
		prevStr = params[0];
		curStr = params[1];
		try {
			if (params.size() != 2) {
				return "�Էµ� ������ ���ڰ����� Ȯ���ϼ���";
			}
		}
		catch (invalid_argument e) {
			message = "�ùٸ��� ���� �Է��Դϴ�.";
		}
		for (int i = 0; i < lines.size(); i++) {
			line = lines[i];
			istringstream ss(line);
			string stringBuffer;
			while (getline(ss, stringBuffer, ' ')) {
				words.push_back(stringBuffer);
			}
		}
		for (int i = 0; i < words.size(); i++) {
			if (prevStr == words[i]) words[i] = curStr;
		}
		string makeline = "";
		vector<string> temp;
		for (int i = 0; i < words.size(); i++) {
			if (words[i].length() + makeline.length() > 74) {
				temp.push_back(makeline);
				makeline = "";
			}
			makeline = makeline + words[i] + " ";
		}
		if (makeline != "") temp.push_back(makeline);
		lines.clear();
		lines.assign(temp.begin(), temp.end());
		return "��� �ٲ�����ϴ�.";
	}
};
class Search : public Strategy {
public:
	vector<string> words;
	string line;
	string searchStr;
	bool founded = false;
	string instruct(vector<string>& lines, vector<string>& params, int& lineIndex) {
		if (params.size() != 1) {
			return "�Էµ� ������ ���ڰ����� Ȯ���ϼ���";
		}
		searchStr = params[0];
		for (int i = 0; i < lines.size(); i++) {
			line = lines[i];
			istringstream ss(line);
			string stringBuffer;
			while (getline(ss, stringBuffer, ' ')) {
				words.push_back(stringBuffer);
			}
			for (int s = 0; s < words.size(); s++) {
				if (searchStr == words[s]) { lineIndex = i; founded = true; break; }
			}
			if (founded) break;
		}
		if (founded) return "ã��!";
		else "��ã��!";
	}
};
class Context {
private: Strategy* strategy;
public:
	void setStrategy(Strategy* strategy) {
		this->strategy = strategy;
	}
	string commandCenter(vector<string>& lines, vector<string>& params, int& lineIndex) {
		return this->strategy->instruct(lines, params, lineIndex);
	}
};



int main() {
	
	vector<string> lines;
	string filestring;
	string word;
	ifstream in("test.txt");
	if (!in.is_open()) {
		cout << "������ ���� �� �����߽��ϴ�." << endl;
	}
	else {
		getline(in, filestring);
		istringstream ss(filestring);
		string temp;
		int byteSize = 0;
		while (getline(ss, word, ' ')) {
			byteSize = byteSize + word.size() + 1;
			if (byteSize < 75) temp = temp + word + ' ';
			else {
				byteSize = word.size();
				lines.push_back(temp);
				temp.clear();
			}
		}
		Context context;
		int lineIndex = 0;
		vector<string> params;
		bool quitAll = false;
		while (true) {
			printConsole(lines, curPage);
			printLine();
			printConsoleMessage(message);
			printLine();
			printcmd();
			printLine();
			string command = cmd();
			char charcmd = cmdtochar(command);	
			switch (charcmd) {
			case 'n':
				{
				Next* n = new Next();
				context.setStrategy(n);
				message = context.commandCenter(lines, params, lineIndex);
				delete n;
				break;
				}
			case 'p':
				{
				Previous* p = new Previous();
				context.setStrategy(p);
				message = context.commandCenter(lines, params, lineIndex);
				delete p;
				break;
				}
			case 'i':
				{
				Insert* i = new Insert();
				context.setStrategy(i);
				parseparams(params, command);
				message = context.commandCenter(lines, params, lineIndex);
				delete i;
				break;
				}
			case 'd':
				{
				Delete* d = new Delete();
				context.setStrategy(d);
				parseparams(params, command);
				message = context.commandCenter(lines, params, lineIndex); 
				delete d;
				break;
				}
			case 'c':
				{
				Change* c = new Change();
				context.setStrategy(c);
				parseparams(params, command);
				message = context.commandCenter(lines, params, lineIndex);
				delete c;
				break;
				}
			case 's':
				{
				Search* s = new Search();
				context.setStrategy(s);
				parseparams(params, command);
				message = context.commandCenter(lines, params, lineIndex);
				delete s;
				break;
				}
			case 't':
				{
				quitAll = true;
				ofstream out("test.txt");
				if (!out.is_open()) {
					throw string("�������!");
				}
				else {
					string writefile;
					for (int i = 0; i < lines.size(); i++) {
						if (i = lines.size() - 1) writefile = writefile + lines[i];
						else {
							writefile = writefile + lines[i]+" ";
						}
					}
					out << writefile;
					out.close();
					
				}
				break;
				}
				default:
					break;
			}
			if (quitAll) break;
			initVector(lines);
		}
		
	}
	
	
	return 0;
}