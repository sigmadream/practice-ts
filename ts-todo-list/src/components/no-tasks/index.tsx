import clipboard from '@assets/clipboard.svg'
import {
  NoTasksDescription,
  NoTasksImg,
  NoTasksTitle,
  StyledNoTasks
} from './styles'

export function NoTasks() {
  return (
    <StyledNoTasks>
      <NoTasksImg src={clipboard} alt='아이콘' />

      <NoTasksTitle>
        아직 등록된 작업이 없습니다.
      </NoTasksTitle>

      <NoTasksDescription>
        작업 생성 및 할 일 항목 정리하기
      </NoTasksDescription>
    </StyledNoTasks>
  )
}
