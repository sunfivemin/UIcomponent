import { memo } from 'react';
import { tabData } from './data';
import { TabContentProps } from './types';
import { useMultiTabMenu } from '@/hooks/useTabMenu';
import * as styles from './tabMenu.css';

const TabItem = memo<{
  id: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}>(({ id, title, isActive, onClick }) => (
  <li className={styles.tabItem}>
    <button
      className={styles.tabButtonVariants[isActive ? 'active' : 'inactive']}
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
      aria-controls={`panel-${id}`}
      id={`tab-${id}`}
    >
      {title}
    </button>
  </li>
));

TabItem.displayName = 'TabItem';

const TabContent = memo<TabContentProps>(({ id, content, isActive }) => (
  <div
    className={isActive ? styles.contentPanelActive : styles.contentPanel}
    role="tabpanel"
    aria-labelledby={`tab-${id}`}
    id={`panel-${id}`}
    hidden={!isActive}
  >
    {content}
  </div>
));

TabContent.displayName = 'TabContent';

const TabMenuMultiple = () => {
  const { activeIds, toggleTab, isActive, selectAll, deselectAll } =
    useMultiTabMenu({
      defaultActiveIds: [tabData[0].id],
    });

  const handleTabClick = (id: string) => {
    toggleTab(id);
  };

  const handleSelectAll = () => {
    selectAll(tabData.map(tab => tab.id));
  };

  const handleDeselectAll = () => {
    deselectAll();
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>#7. 다중 선택 탭메뉴</h3>
      <div className={styles.tabMenu()}>
        {/* 컨트롤 버튼들 */}
        <div
          style={{
            padding: '12px 16px',
            borderBottom: '1px solid hsl(var(--border))',
            display: 'flex',
            gap: '8px',
            backgroundColor: 'hsl(var(--muted))',
          }}
        >
          <button
            onClick={handleSelectAll}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid hsl(var(--border))',
              borderRadius: '4px',
              backgroundColor: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
              cursor: 'pointer',
            }}
          >
            모두 선택
          </button>
          <button
            onClick={handleDeselectAll}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              border: '1px solid hsl(var(--border))',
              borderRadius: '4px',
              backgroundColor: 'hsl(var(--accent))',
              color: 'hsl(var(--accent-foreground))',
              cursor: 'pointer',
            }}
          >
            모두 해제
          </button>
          <span
            style={{
              fontSize: '12px',
              color: 'hsl(var(--muted-foreground))',
              marginLeft: 'auto',
            }}
          >
            선택된 탭: {activeIds.length}개
          </span>
        </div>

        <ul className={styles.tabList} role="tablist">
          {tabData.map(tab => (
            <TabItem
              key={tab.id}
              id={tab.id}
              title={tab.title}
              isActive={isActive(tab.id)}
              onClick={() => handleTabClick(tab.id)}
            />
          ))}
        </ul>
        <div className={styles.content}>
          {/* 선택된 탭들의 컨텐츠를 동시에 표시 */}
          {activeIds.length > 0 ? (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {activeIds.map(activeId => {
                const tab = tabData.find(t => t.id === activeId);
                if (!tab) return null;

                return (
                  <div
                    key={activeId}
                    style={{
                      padding: '16px',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      backgroundColor: 'hsl(var(--card))',
                    }}
                  >
                    <h4
                      style={{
                        margin: '0 0 12px 0',
                        fontSize: '16px',
                        fontWeight: '600',
                        color: 'hsl(var(--foreground))',
                      }}
                    >
                      {tab.title}
                    </h4>
                    <div
                      style={{
                        color: 'hsl(var(--muted-foreground))',
                        fontSize: '14px',
                        lineHeight: '1.5',
                      }}
                    >
                      {tab.description}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              style={{
                padding: '24px',
                textAlign: 'center',
                color: 'hsl(var(--muted-foreground))',
              }}
            >
              선택된 탭이 없습니다. 탭을 선택해보세요!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabMenuMultiple;
