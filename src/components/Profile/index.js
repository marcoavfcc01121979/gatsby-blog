import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import getThemeColor from '../../utils/getThemeColor'

import Avatar from '../Avatar/index'
import * as S from './styles'

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description, author },
      }
    } = useStaticQuery(graphql`
      query MySiteMetadata {
        site{ 
          siteMetadata {
            position
            title
            description
            author
          }
        }
      }    
    `)
    return(
      <S.ProfileWrapper>
        <S.ProfileLink cover direction="left" bg={getThemeColor()} duration={0.6} to="/" >
          <Avatar />
          <S.ProfileAuthor>
            {title}
            <S.ProfilePosition>{position}</S.ProfilePosition>
          </S.ProfileAuthor>
        </S.ProfileLink>
        <S.ProfileDescription>{description}</S.ProfileDescription>
      </S.ProfileWrapper>
    )
  }

export default Profile; 