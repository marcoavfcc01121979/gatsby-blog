import React from 'react'
import PropTypes from 'prop-types'
import ReactDisqusComments from 'react-disqus-comments'

import * as S from './styles'

const Comments = ({ url, title }) => {
  const completeUrl = `https://marcoferreira.com.br${url}`

  return(
    <S.CommentsWrapper>
      <S.CommentsTitle>Coméntarios</S.CommentsTitle>
      <ReactDisqusComments 
        shortname="marcoferreira-com-br"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>  
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments;