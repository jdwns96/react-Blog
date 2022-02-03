/* 
    @describe 
    - 모바일 뷰 에서 사이드 nav 바 토글 
*/

export const SIDE_BAR_TOGGLE = "SIDE_BAR_TOGGLE" as const;

export const sidebarToggleAction = () => ({ type: SIDE_BAR_TOGGLE });
