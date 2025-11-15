#{fact rule=code-injection@v1.0 defects=1}

from flask import Flask

app = Flask(__name__)

def hello():
  app.run()


# ruleid:avoid_using_app_run_directly
app.run(debug=True)

if __name__ == '__main__':
    app.run()

#{/fact}
