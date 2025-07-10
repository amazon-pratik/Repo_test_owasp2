#{fact rule=os-command-injection@v1.0 defects=0}

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

message = requests.get("https://fakeurl.asdf/message").text


# ok: formatted-string-bashoperator
t5 = BashOperator(
    task_id="safe",
    bash_command="echo hello world!",
    dag=dag
)

#{/fact}
