<?php

function test1($input)
{
    $queryBuilder = $conn->createQueryBuilder();

    $queryBuilder
        ->select('id', 'name')
        ->from('users')
// {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: doctrine-orm-dangerous-query
        ->where('email = '.$input)
// {/fact}
    ;
}

function test2($email, $input)
{
    $queryBuilder = new QueryBuilder($this->connection);

    $queryBuilder
        ->select('id', 'name')
        ->from('users')
        ->where('email = ?')
        ->setParameter(0, $email)
// {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: doctrine-orm-dangerous-query
        ->andWhere(sprintf('user = %s', $input))
// {/fact}
    ;
}

function okTest1($input)
{
    $queryBuilder = $conn->createQueryBuilder();

    $queryBuilder
        ->select('id', 'name')
        ->from('users')
// {fact rule=sql-injection@v1.0 defects=0}
        // ok: doctrine-orm-dangerous-query
        ->where('email = ?')
// {/fact}
        ->setParameter(0, $input)
    ;
}
