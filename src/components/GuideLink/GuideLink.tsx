import Link from 'next/link'
import styled from 'styled-components'

import { LineUp, SmartHRBeginnerMarkIcon } from '@/components/ui'
import AdminImage from '@/images/01_admin_hanako.svg'
import EmployeeImage from '@/images/03_employee_taro.svg'
import { breakpoint, color, fontSize, interaction, leading, radius, spacing } from '@/styles/theme'

type ImageType = 'admin' | 'employee'

type Props = {
  isSp: boolean
  href: string
  imageType: ImageType
  children: React.ReactNode
}

const PersonImage: React.VFC<{ imageType: ImageType }> = ({ imageType }) =>
  imageType === 'admin' ? <AdminImage aria-hidden="true" /> : <EmployeeImage aria-hidden="true" />

export const GuideLink: React.VFC<Props> = ({ isSp, href, children, imageType }) => {
  return (
    <Link passHref href={href}>
      <Anchor>
        {/* NOTE: トークンで指定できないけどFigmaの指定は12px */}
        <LineUp vAlign="center" gap="XXS">
          <SmartHRBeginnerMarkIcon size={48} aria-hidden="true" />
          <Label>{children}</Label>
        </LineUp>
        {!isSp && <PersonImage imageType={imageType} />}
      </Anchor>
    </Link>
  )
}

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 496px;
  height: 110px;
  padding: 0 ${spacing.MONJO_XS};
  font-size: ${fontSize.L};
  line-height: ${leading.NORMAL};
  border: 1px solid ${color.BORDER};
  border-radius: ${radius.monjo_l};

  @media screen and (max-width: ${breakpoint.SP}px) {
    width: 100%;
  }

  &:focus,
  &:hover {
    opacity: ${interaction.hover.feedbackOpacity};
  }
`

const Label = styled.label`
  cursor: pointer;
`
