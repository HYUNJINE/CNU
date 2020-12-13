class Strategy {
public:
    virtual int doOperation(int num1, int num2);

};

class OperationAdd: public Strategy {
public:
    virtual int doOperation(int num1, int num2) {
        return num1+num2;
    }
};

class OperationSubtract : public Strategy {
public:
    virtual int doOpertaion(int num1 ,int num2) {
        return num1 -num2;
    }
};

class OperationMultiply : public Strategy {
public: 
    virtual int doOperation(int num1, int num2) {
        return num1*num2;
    }
};

class Context{
private:
    Strategy* strategy;
public:
    Context(Strategy* s) {
        strategy = s;

    }
    int executeStrategy(int num1, int num2) {
        return strategy->doOperation(num1,num2);
    }
};