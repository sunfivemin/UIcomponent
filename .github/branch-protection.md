# 브랜치 보호 규칙 설정 가이드

## main 브랜치 보호 규칙

GitHub 저장소 설정에서 다음 규칙을 설정하세요:

### 필수 상태 확인

- [ ] `test` job 통과
- [ ] `build` job 통과
- [ ] `lint` 검사 통과

### 필수 리뷰

- [ ] 최소 1명의 승인 필요
- [ ] 코드 소유자 리뷰 필요
- [ ] 최신 커밋에 대한 승인 필요

### 기타 설정

- [ ] main 브랜치에 직접 푸시 금지
- [ ] 병합 전 상태 확인 통과 필요
- [ ] 오래된 승인 무효화 (3일)

## develop 브랜치 보호 규칙

### 필수 상태 확인

- [ ] `test` job 통과
- [ ] `build` job 통과

### 필수 리뷰

- [ ] 최소 1명의 승인 필요

## 설정 방법

1. GitHub 저장소 → Settings → Branches
2. "Add rule" 클릭
3. Branch name pattern: `main` 또는 `develop`
4. 위의 규칙들을 체크
5. "Create" 클릭
