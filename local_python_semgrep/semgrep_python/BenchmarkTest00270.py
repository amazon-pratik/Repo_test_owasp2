#{fact rule=os-command-injection@v1.0 defects=0}

import asyncio

class AsyncEventLoop:
    def __enter__(self):
        self.loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self.loop)
        return self.loop

    def __exit__(self, *args):
        self.loop.close()


def ok1():
    program = "echo"
    loop = asyncio.new_event_loop()
    # ok: dangerous-asyncio-create-exec
    proc = loop.run_until_complete(asyncio.subprocess.create_subprocess_exec(program, [program, "123"]))
    loop.run_until_complete(proc.communicate())

#{/fact}
