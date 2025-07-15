# Git Flow 워크플로우 가이드

## 🌿 브랜치 구조

```
main (프로덕션)
├── develop (개발)
│   ├── feature/새기능
│   ├── feature/버그수정
│   └── release/버전준비
└── hotfix/긴급수정
```

## 🚀 워크플로우

### 1. 새 기능 개발

```bash
# develop 브랜치에서 시작
git checkout develop
git pull origin develop

# 새 기능 브랜치 생성
git checkout -b feature/새기능이름

# 개발 작업...
git add .
git commit -m "feat: 새 기능 추가"

# develop에 병합
git checkout develop
git merge feature/새기능이름
git push origin develop
```

### 2. 릴리스 준비

```bash
# develop에서 릴리스 브랜치 생성
git checkout develop
git checkout -b release/v1.0.0

# 버전 번호 업데이트, 문서 수정 등
git add .
git commit -m "chore: v1.0.0 릴리스 준비"

# main과 develop에 병합
git checkout main
git merge release/v1.0.0
git tag v1.0.0
git push origin main --tags

git checkout develop
git merge release/v1.0.0
git push origin develop

# 릴리스 브랜치 삭제
git branch -d release/v1.0.0
```

### 3. 긴급 수정 (Hotfix)

```bash
# main에서 hotfix 브랜치 생성
git checkout main
git checkout -b hotfix/긴급수정

# 수정 작업...
git add .
git commit -m "fix: 긴급 버그 수정"

# main과 develop에 병합
git checkout main
git merge hotfix/긴급수정
git tag v1.0.1
git push origin main --tags

git checkout develop
git merge hotfix/긴급수정
git push origin develop

# hotfix 브랜치 삭제
git branch -d hotfix/긴급수정
```

## 🔄 CI/CD 파이프라인

### 브랜치별 배포

- **feature/\*** → 테스트만 실행
- **develop** → 스테이징 환경 배포
- **main** → 프로덕션 환경 배포

### 자동화된 검사

1. **테스트 실행** - 모든 브랜치
2. **린팅 검사** - 모든 브랜치
3. **빌드 검증** - 모든 브랜치
4. **자동 배포** - develop/main 브랜치

## 📋 Pull Request 규칙

### 필수 사항

- [ ] 테스트 코드 포함
- [ ] 문서 업데이트
- [ ] 린팅 통과
- [ ] 코드 리뷰 완료

### 커밋 메시지 규칙

```
feat: 새 기능
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 코드 리팩토링
test: 테스트 추가/수정
chore: 빌드 프로세스 수정
```

## 🛡️ 브랜치 보호

- **main**: 직접 푸시 금지, PR 필수
- **develop**: 직접 푸시 금지, PR 필수
- **feature/\***: 자유롭게 푸시 가능

## 🎯 실무 팁

1. **작은 단위로 커밋** - 한 번에 하나의 변경사항
2. **명확한 커밋 메시지** - 무엇을 왜 변경했는지
3. **정기적인 동기화** - develop 브랜치와 동기화
4. **테스트 우선** - 코드보다 테스트를 먼저 작성
