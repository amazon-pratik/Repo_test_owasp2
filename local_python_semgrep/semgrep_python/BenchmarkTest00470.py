#{fact rule=os-command-injection@v1.0 defects=0}

import asyncio

class AsyncEventLoop:
    def __enter__(self):
        self.loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self.loop)
        return self.loop

    def __exit__(self, *args):
        self.loop.close()

class WaitingProtocol(asyncio.SubprocessProtocol):
    def __init__(self, exit_future):
        self.exit_future = exit_future

    def process_exited(self):
        self.exit_future.set_result(True)


def ok2():
    with AsyncEventLoop() as loop:
        # ok: dangerous-asyncio-shell
        proc = loop.run_until_complete(asyncio.subprocess.create_subprocess_shell('echo "foobar"'))
        loop.run_until_complete(proc.wait())

#{/fact}
