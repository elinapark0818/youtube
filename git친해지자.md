# git cmd 명령어들

git status
: 상태 확인하기

git remote
: remote 현재 프로젝트에 등록된 리모트 저장소 확인하기

git remote -v
: 현재 프로젝트에 등록된 리모트 저장소의 단축이름과 URL을 함께 볼 수 있다

git remote add <URL주소>
: 새로운 리모트 추가하기

git fetch <remote>
: 로컬에는 없지만 리모트 저장소에는 있는 데이터를 모두 가져온다.  
다만 Merge를 수동으로 해야한다

git pull
: 리모트 저장소 브랜치에서 데이터를 가져올 뿐만 아니라 자동으로 로컬 브랜치와 Merge 시킬 수 있다.

git push <remote> <branch>
: 브랜치를 리모트 저장소에 푸쉬한다

git remote show <remote>
: 리모트 저장소의 구체적인 정보를 확인할 수 있다.

git remote rename <remote name>
: 리모트 저장소 이름 변경하기

git remote remove <remote>
: 리모트 저장소 삭제하기

git add \*
: 전체 파일
