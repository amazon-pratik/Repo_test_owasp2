<?php

$ldapconn = ldap_connect("foo.com");

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: ldap-bind-without-password
$ldapbind = ldap_bind($ldapconn);
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: ldap-bind-without-password
ldap_bind($ldapconn, "username");
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: ldap-bind-without-password
ldap_bind($ldapconn, NULL, NULL);
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: ldap-bind-without-password
ldap_bind($ldapconn, "username", "");
// {/fact}

$a = "";
$b = "";
// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: ldap-bind-without-password
ldap_bind($ldapconn, $a, $b);
// {/fact}

$c = "username";
$d = "";
// {fact rule=improper-authentication@v1.0 defects=1}
// ruleid: ldap-bind-without-password
ldap_bind($ldapconn, $c, $d);
// {/fact}

$e = "user";
$f = "pass";
// {fact rule=improper-authentication@v1.0 defects=0}
// ok: ldap-bind-without-password
ldap_bind($ldapconn, $e, $f);
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=0}
// ok: ldap-bind-without-password
ldap_bind($ldapconn, "username", "password");
// {/fact}

// {fact rule=improper-authentication@v1.0 defects=0}
// ok: ldap-bind-without-password
ldap_bind($ldapconn, $username, $password);
// {/fact}
