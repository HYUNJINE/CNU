#include <iostream>
#include "strategy.h"


using namespace std;

int main() {
    Context* context =new Context(new OperationAdd);
    cout <<"10+5=" << context->executeStrategy(10,5) <<endl;

}