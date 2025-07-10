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
templated_command = """
{% for i in range(5) %}
    echo "{{ ds }}"
    echo "{{ macros.ds_add(ds, 7)}}"
    echo "{{ params.my_param }}"
{% endfor %}
"""

t4 = BashOperator(
    task_id="safe_templated",
    depends_on_past=False,
    bash_command=templated_command,
    params={
        "my_param": "Parameter I passed in"
    },
    dag=dag
)

#{/fact}
