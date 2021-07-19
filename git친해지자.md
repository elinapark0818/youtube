# git cmd 명령어들

git status
: 상태 확인하기

git config - -global user.name “Your name”
git config - -global user.email “Your email address”
: 전역 사용자명/이메일 설정

git config user.name “Your name”
git config user.email “Your email address”
: 저장소별 사용자명/이메일 설정

git config - -global - -list
: 전역 설정 정보 조회

git config - -list
: 저장소별 설정 정보 조회

mkdir /path/newDir
cd /path/newDir
git init
: 새로운 저장소 초기화하기

git clone <저장소 url>
: 저장소 복제하기

git remote add <원격 저장소> <저장소 url>
: 새로운 원격 저장소 추가하기

git remote
: remote 현재 프로젝트에 등록된 리모트 저장소 확인하기

git remote -v
: 현재 프로젝트에 등록된 리모트 저장소의 단축이름과 URL을 함께 볼 수 있다

git remote add <원격 저장소> <저장소URL>
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

git remote rm <remote>
: 원격 저장소를 제거하고 관련된 브랜치도 제거하기

git remote prune <remote>>
: 원격 저장소에서 쓸모가 없어진 원격 브랜치 제거하기

git add \*
: 전체 파일 추가하기

git commit -m "<message>"
: 존재하는 파일 스테이징하고 커밋하기

git commit -m "<message>" -a
: 수정되고 추적되는 모든 파일의 변경 사항 커밋하기

git commit -m “<message>” - -amend
: 마지막 커밋 고치기

git commit -C HEAD - -amend
: 이전 커밋을 수정하고 커밋메시지를 재사용하기

git branch
: 지역 브랜치 목록 보기

git branch -r
: 원격 브랜치 목록 보기

git branch -a
: 지역과 원격을 포함한 모든 브랜치 목록 보기

git branch <새로운 브랜치>
: 현재 브랜치에서 새로운 브랜치 생성하기

git checkout <브랜치>
: 다른 브랜치 체크아웃하기

git checkout -b <새로운 브랜치>
: 현재 브랜치에서 새로운 브랜치 생성하고 체크아웃하기

git clone <remote>
: 저장소 복제하기
