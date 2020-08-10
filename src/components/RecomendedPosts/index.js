import React from 'react'
import propTypes from 'prop-types'

import getThemeColor from '../../utils/getThemeColor'

import * as S from './styles'

const RecomendedPosts = ({ next, previous }) => (
  <S.RecommendedWrapper>
  {previous && (
    <S.RecommendedLink cover direction="left" bg={getThemeColor()} duration={0.6} to={previous.fields.slug} className="previous">
      {previous.frontmatter.title}
    </S.RecommendedLink>
  )}
  {next && (
    <S.RecommendedLink cover direction="right" bg={getThemeColor()} duration={0.6} to={next.fields.slug} className="next">
      {next.frontmatter.title}
    </S.RecommendedLink>
  )}

  </S.RecommendedWrapper>
)

RecomendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
}

export default RecomendedPosts;