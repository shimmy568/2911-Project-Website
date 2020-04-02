import React from "react"
import PropTypes from "prop-types"
import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core"
import { navigate } from "gatsby"

const IndexCard = ({ cardTitle, cardDesc, cardDest }) => {
  const onCardClick = () => {
    navigate(cardDest)
  }

  return (
    <Card>
      <CardActionArea onClick={onCardClick}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body2" component="p">
            {cardDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

IndexCard.propTypes = {
  cardTitle: PropTypes.string,
  cardDesc: PropTypes.string,
  cardDest: PropTypes.string, // The link that the card navigates to when clicked
}

IndexCard.defaultProps = {}

export default IndexCard
