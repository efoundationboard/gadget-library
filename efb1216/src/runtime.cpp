#include <node.h>
#include <v8.h>

using namespace v8;

Handle<Value> go(const Arguments &args)
{
	HandleScope scope;
	return scope.Close(String::New("1"));
}

void Init_Runtime(Handle<Object> target)
{
	target->Set(String::NewSymbol("go"), FunctionTemplate::New(go)->GetFunction());
}

NODE_MODULE(go)