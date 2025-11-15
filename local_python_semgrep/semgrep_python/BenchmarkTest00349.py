#{fact rule=os-command-injection@v1.0 defects=1}

import requests
from datetime import timedelta
from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from airflow.utils.dates import days_ago

default_args = {
    "owner": "airflow",
    "depends_on_past": False,
    "start_date": days_ago(2),
    "email": ["airflow@example.com"],
    "email_on_failure": False,
    "email_on_retry": False,
    "retries": 1,
    "retry_delay": timedelta(minutes=5)
}

dag = DAG(
    "tutorialex2",
    default_args=default_args,
    description="Tutorial DAG",
    schedule_interval=timedelta(days=1)
)


howlong = requests.get("https://fakeurl.asdf/howlong").text
# ruleid: formatted-string-bashoperator
command = "sleep {}".format(howlong)
t2 = BashOperator(
    task_id="sleep",
    depends_on_past=False,
    bash_command=command,
    retries=3,
    dag=dag
)

#{/fact}
