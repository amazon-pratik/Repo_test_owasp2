#{fact rule=sql-injection@v1.0 defects=1}

from django.http import HttpResponse


class Person(models.Model):
    first_name = models.CharField(...)
    last_name = models.CharField(...)
    birth_date = models.DateField(...)

@public
def log_in(request):
    error = ""
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        # ruleid: tainted-sql-string
        query = """
            SELECT * FROM auth_user
               INNER JOIN authentication_userprofile
               ON auth_user.id = authentication_userprofile.user_id
            WHERE username = '%s'
            AND authentication_userprofile.cleartext_password = '%s';
""" % (
            username,
            password,
        )
        try:
            user = User.objects.raw(query)[0]
        except IndexError:
            user = None
        if user:
            login(request, user)
            return redirect("dash")
        else:
            error = "The credentials you entered are not valid. Try again."

    return render(request, "login.html", {"error": error})


#{/fact}
