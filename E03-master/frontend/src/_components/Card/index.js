import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { assets } from '../../_helpers/assets'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    alignItems: 'center',
    margin: '0 20px',
  },
})
export default function ImgMediaCard(props) {
  const classes = useStyles()
  const { title, src, fechaInicio, descripcion, localizacion } = props
  return (
    <Card className={classes.card} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={assets('/images/book.jpg')}
          title={title}
        />
        <CardContent>
          <Typography className="text-truncate" style={{ maxWidth: "230px" }} gutterBottom variant="h5" component="p">
            {title}
          </Typography>
          <Typography className="text-truncate" style={{ maxWidth: "240px" }} variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
          <br />
            <div className="text-truncate" style={{ maxWidth: "240px" }}>
              Place: {localizacion}
            </div>
          <br /> <br />
          Date: {fechaInicio}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
