import React, { memo } from 'react'

import { Box } from '@material-ui/core'

import Layout from 'screens/layout'
import TextEditor from 'components/text-editor'

import useStyles from './home.styles'
import useHome from './home.hook'

function Home() {
  const classes = useStyles()

  const { currentText, onChangeText, onClickSave, onKeyPressed } = useHome()

  return (
    <Box className={classes.homeContainer}>
      <Layout>
        <Box className={classes.homeContent}>
          <TextEditor 
            currentText={currentText} 
            onChangeText={onChangeText} 
            onClickSave={onClickSave} 
            onKeyPressed={onKeyPressed} 
          />
        </Box> 
      </Layout>
    </Box>
  )
}

export default memo(Home)
