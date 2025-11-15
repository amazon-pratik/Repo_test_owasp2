#{fact rule=sql-injection@v1.0 defects=1}

from django.db import connection

def upload(request, project_id):

    if request.method == 'POST':

        proj = Project.objects.get(pk=project_id)
        form = ProjectFileForm(request.POST, request.FILES)

        if form.is_valid():
            # Dependent on feature in develop
            # todoruleid: sql-injection-db-cursor-execute
            name = request.POST.get('name', False)
            upload_path = store_uploaded_file(name, request.FILES['file'])

            other_name = "{}".format(name)
            curs = connection.cursor()
            curs.execute(
                "insert into taskManager_file ('name','path','project_id') values ('%s','%s',%s)" %
                (other_name, upload_path, project_id))


#{/fact}
