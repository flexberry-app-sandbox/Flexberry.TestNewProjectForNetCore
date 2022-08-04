docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testnewprojectfornetcore/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testnewprojectfornetcore/app ../..
