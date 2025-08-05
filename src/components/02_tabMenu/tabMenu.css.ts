import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars, componentTokens } from '../../styles/design-system.css';

// Export themeClass for components to use
export { themeClass } from '../../styles/design-system.css';

export const pageContainer = style({
  minHeight: '100vh',
  background: vars.color.background.page,
  padding: `${vars.space.xl} ${vars.space.md}`,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const pageHeader = style({
  textAlign: 'center',
  marginBottom: vars.space['2xl'],
  padding: `${vars.space.xl} 0`,
  ...componentTokens.performance,
});

export const pageTitle = style({
  fontSize: vars.typography.fontSize['4xl'],
  fontWeight: vars.typography.fontWeight.extrabold,
  background: `linear-gradient(135deg, ${vars.color.primary[600]} 0%, ${vars.color.primary[800]} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: vars.space.md,
  letterSpacing: '-0.025em',
  ...componentTokens.performance,
});

export const pageSubtitle = style({
  fontSize: vars.typography.fontSize.xl,
  color: vars.color.text.secondary,
  fontWeight: vars.typography.fontWeight.normal,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: vars.typography.lineHeight.normal,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const section = style({
  ...componentTokens.section,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const sectionTitle = style({
  ...componentTokens.title,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,

  selectors: {
    '&::before': {
      content: '""',
      width: '4px',
      height: '24px',
      background: `linear-gradient(135deg, ${vars.color.primary[500]} 0%, ${vars.color.primary[700]} 100%)`,
      borderRadius: vars.radius.sm,
      willChange: 'auto',
    },
  },
});

export const summary = style({
  marginTop: vars.space['2xl'],
  padding: `${vars.space.xl} ${vars.space.lg}`,
  background: vars.color.background.muted,
  borderRadius: vars.radius.xl,
  border: `1px solid ${vars.color.border.light}`,
  boxShadow: vars.shadow.md,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const summaryTitle = style({
  color: vars.color.text.primary,
  fontSize: vars.typography.fontSize['2xl'],
  fontWeight: vars.typography.fontWeight.bold,
  marginBottom: vars.space.lg,
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,

  selectors: {
    '&::before': {
      content: '🔍',
      fontSize: vars.typography.fontSize.xl,
      willChange: 'auto',
    },
  },
});

export const summaryList = style({
  lineHeight: vars.typography.lineHeight.loose,
  color: vars.color.text.secondary,
  fontSize: vars.typography.fontSize.base,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

export const summaryDetails = style({
  ...componentTokens.summaryDetails,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

// 탭메뉴 전용 스타일
export const tabMenuContainer = style({
  width: '100%',
  margin: `${vars.space.xl} 0`,
  border: `1px solid ${vars.color.border.light}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.card,
  boxShadow: vars.shadow.md,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

// 탭 버튼들을 가로로 배치하기 위한 컨테이너
export const tabButtonContainer = style({
  display: 'flex',
  width: '100%',
});

export const tabList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  backgroundColor: vars.color.background.card,
  borderBottom: `1px solid ${vars.color.border.light}`,
  position: 'relative',
  width: '100%',
});

export const tabItem = style({
  flex: '1 1 0%',
  position: 'relative',
  cursor: 'pointer',
  userSelect: 'none',
  transition: `all ${vars.transition.normal}`,
  width: '100%',
});

// 라디오 버튼 방식 전용 탭 컨테이너 스타일
export const radioTabContainer = style({
  display: 'flex',
  backgroundColor: vars.color.background.card,
  borderBottom: `1px solid ${vars.color.border.light}`,
  borderLeft: `1px solid ${vars.color.border.light}`,
  position: 'relative',
  width: '100%',
  borderRadius: `${vars.radius.lg} ${vars.radius.lg} 0 0`,
  overflow: 'hidden',
});

// 라디오 버튼 방식 전용 탭 아이템 스타일
export const radioTabItem = style({
  flex: '1 1 0%',
  position: 'relative',
});

// 라디오 버튼 방식 전용 콘텐츠 컨테이너 스타일
export const radioContentContainer = style({
  width: '100%',
  position: 'relative',
});

export const tabButton = style({
  width: '100%',
  padding: `${vars.space.md} ${vars.space.lg}`,
  border: 'none',
  background: vars.color.background.card,
  color: vars.color.text.primary,
  fontSize: vars.typography.fontSize.base,
  fontWeight: vars.typography.fontWeight.medium,
  textAlign: 'center',
  cursor: 'pointer',
  transition: `all ${vars.transition.normal}`,
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  ...componentTokens.performance,
});

export const tabButtonActive = style({
  background: vars.color.interactive.primary,
  color: vars.color.interactive.primaryForeground,
  fontWeight: vars.typography.fontWeight.semibold,
  zIndex: 1,
  width: '100%',
});

export const tabButtonInactive = style({});

export const tabButtonVariants = styleVariants({
  active: [tabButton, tabButtonActive],
  inactive: [tabButton, tabButtonInactive],
});

export const content = style({
  padding: vars.space.lg,
  minHeight: '120px',
  width: '100%',
  backgroundColor: vars.color.background.card,
  color: vars.color.text.primary,
  borderBottom: `1px solid ${vars.color.border.light}`,
  position: 'relative',
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const contentPanel = style({
  display: 'none',
});

export const contentPanelActive = style({
  display: 'block',
});

// 애니메이션용 패널 스타일 (3_animated.tsx 전용)
export const animatedContentPanel = style({
  opacity: 0,
  transform: 'translateY(10px)',
  transition: `opacity ${vars.transition.normal}, transform ${vars.transition.normal}`,
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  pointerEvents: 'none',
});

export const animatedContentPanelActive = style({
  opacity: 1,
  transform: 'translateY(0)',
  transition: `opacity ${vars.transition.normal}, transform ${vars.transition.normal}`,
  position: 'relative',
  pointerEvents: 'auto',
});

// details 방식 패널도 동일하게 적용
export const detailsPanel = style({
  backgroundColor: vars.color.background.card,
  color: vars.color.text.primary,
  border: `1px solid ${vars.color.border.light}`,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
  marginBottom: vars.space.md,
  padding: vars.space.lg,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
});

// 애니메이션 탭메뉴용 스타일
export const animatedTabList = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  backgroundColor: vars.color.background.card,
  borderBottom: `1px solid ${vars.color.border.light}`,
  position: 'relative',
  width: '100%',
});

// 라디오 버튼 방식 스타일
export const radioInput = style({
  display: 'none',
});

export const radioLabel = style({
  display: 'inline-block',
  width: '25%',
  boxSizing: 'border-box',
  padding: `${vars.space.md} ${vars.space.sm}`, // padding 조정
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
  borderBottom: `1px solid ${vars.color.border.light}`,
  background: vars.color.background.card,
  color: vars.color.text.primary,
  fontSize: vars.typography.fontSize.sm,
  fontWeight: vars.typography.fontWeight.medium,
  textAlign: 'center',
  transition: `all ${vars.transition.normal}`,
  position: 'relative',
  ...componentTokens.performance,
});

export const radioContent = style({
  display: 'none',
  padding: vars.space.lg,
  backgroundColor: vars.color.background.card,
  color: vars.color.text.primary,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
  boxSizing: 'border-box',
});

export const radioContentActive = style({
  display: 'block',
});

// 검색 관련 스타일
export const searchContainer = style({
  padding: vars.space.lg,
  borderBottom: `1px solid ${vars.color.border.light}`,
  backgroundColor: vars.color.background.card,
});

export const searchInput = style({
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: `1px solid ${vars.color.border.light}`,
  borderRadius: vars.radius.md,
  fontSize: vars.typography.fontSize.sm,
  backgroundColor: vars.color.background.card,
  color: vars.color.text.primary,
  outline: 'none',
  transition: `border-color ${vars.transition.normal}`,

  ':focus': {
    borderColor: vars.color.interactive.primary,
    boxShadow: `0 0 0 2px ${vars.color.interactive.primary}20`,
  },

  '::placeholder': {
    color: vars.color.text.secondary,
  },
});

// 다중 선택 탭메뉴 관련 스타일
export const controlContainer = style({
  padding: `${vars.space.md} ${vars.space.lg}`,
  borderBottom: `1px solid ${vars.color.border.light}`,
  display: 'flex',
  gap: vars.space.sm,
  backgroundColor: vars.color.background.card,
  alignItems: 'center',
});

export const controlButton = style({
  padding: `${vars.space.xs} ${vars.space.sm}`,
  fontSize: vars.typography.fontSize.xs,
  border: `1px solid ${vars.color.border.light}`,
  borderRadius: vars.radius.sm,
  backgroundColor: vars.color.interactive.accent,
  color: vars.color.interactive.accentForeground,
  cursor: 'pointer',
  transition: `all ${vars.transition.normal}`,

  ':hover': {
    backgroundColor: vars.color.interactive.primary,
    color: vars.color.interactive.primaryForeground,
  },
});

export const selectedCount = style({
  fontSize: vars.typography.fontSize.xs,
  color: vars.color.text.secondary,
  marginLeft: 'auto',
});

export const multipleContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
});

export const multipleContentItem = style({
  padding: vars.space.lg,
  border: `1px solid ${vars.color.border.light}`,
  borderRadius: vars.radius.lg,
  backgroundColor: vars.color.background.card,
});

export const multipleContentTitle = style({
  margin: `0 0 ${vars.space.md} 0`,
  fontSize: vars.typography.fontSize.lg,
  fontWeight: vars.typography.fontWeight.semibold,
  color: vars.color.text.primary,
});

export const multipleContentDescription = style({
  color: vars.color.text.secondary,
  fontSize: vars.typography.fontSize.sm,
  lineHeight: vars.typography.lineHeight.relaxed,
});

export const emptyState = style({
  padding: vars.space.xl,
  textAlign: 'center',
  color: vars.color.text.secondary,
  fontSize: vars.typography.fontSize.sm,
});

// TabContent 컴포넌트용 스타일 추가
export const tabContent = style({
  display: 'block',
  padding: vars.space.lg,
  minHeight: '120px',
  width: '100%',
  backgroundColor: vars.color.background.card,
  color: vars.color.text.primary,
  ...componentTokens.performance,
  ...componentTokens.themeTransition,
  boxSizing: 'border-box',
});

export const tabContentHidden = style({
  display: 'none',
});

// 인디케이터 스타일 추가
export const indicator = style({
  position: 'absolute',
  bottom: 0,
  height: '3px',
  backgroundColor: vars.color.border.light,
  transition: `all ${vars.transition.normal}`,
  zIndex: 1,
});

// 컨테이너 레시피
export const tabMenu = recipe({
  base: tabMenuContainer,
});

// ===== GLOBAL STYLES =====

// 탭 버튼 활성화 스타일
globalStyle('#tab1:checked ~ div label[for="tab1"]', {
  backgroundColor: vars.color.interactive.primary,
  color: vars.color.interactive.primaryForeground,
  fontWeight: vars.typography.fontWeight.semibold,
});

globalStyle('#tab2:checked ~ div label[for="tab2"]', {
  backgroundColor: vars.color.interactive.primary,
  color: vars.color.interactive.primaryForeground,
  fontWeight: vars.typography.fontWeight.semibold,
});

globalStyle('#tab3:checked ~ div label[for="tab3"]', {
  backgroundColor: vars.color.interactive.primary,
  color: vars.color.interactive.primaryForeground,
  fontWeight: vars.typography.fontWeight.semibold,
});

globalStyle('#tab4:checked ~ div label[for="tab4"]', {
  backgroundColor: vars.color.interactive.primary,
  color: vars.color.interactive.primaryForeground,
  fontWeight: vars.typography.fontWeight.semibold,
});

// input과 콘텐츠가 형제관계
globalStyle('#tab1:checked ~ div[id="panel-tab1"]', {
  display: 'block',
});

globalStyle('#tab2:checked ~ div[id="panel-tab2"]', {
  display: 'block',
});

globalStyle('#tab3:checked ~ div[id="panel-tab3"]', {
  display: 'block',
});

globalStyle('#tab4:checked ~ div[id="panel-tab4"]', {
  display: 'block',
});
