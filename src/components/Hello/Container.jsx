import pic from './../../assets/img/images.jpeg'
import './ContainerStyle.css'
const Container = (props) => {
  return (
    <div className={'container ' + props.class} style={props.style}>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem nobis nulla repudiandae accusantium, ab totam perferendis officiis consequatur asperiores, atque nisi earum iusto nam molestias. Eveniet earum nesciunt natus assumenda?</p>
      <img src={pic} alt="" />
    </div>
  )
}

export default Container