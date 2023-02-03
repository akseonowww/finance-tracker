import Button from "../Button/Button"
import './Profile.css'

const Profile = ({
   title = '369 724,99 ₽',
   user_avatar = '',
   user_name = ['Имя', 'Фамилия'],
   notification = 0,
   accounts = [
      {
         index: 0,
         bank: 'Tinkoff',
         background: '#1B1B1B',
         type: 'Дебетовая Карта',
         value: 50123.56
      },
      {
         index: 1,
         bank: 'Сбер',
         background: '#00670F',
         type: 'Вклад',
         value: 37568.34
      },
      {
         index: 2,
         bank: 'Альфа',
         background: '#A90A00',
         type: 'Кредитная Карта',
         value: 40500.56
      }
   ]
}) => {
   return (
      <div className="Profile">
         <div className="Title">
            <h2>{title}</h2>
         </div>
         <div className="User">
            <div className="User__Block">
               <div className="Avatar">
                  {
                     user_avatar || <i className="bi bi-person-circle"></i>
                  }
               </div>
               <div className="Info">
                  <strong className="Info__Name">
                     {
                        `${user_name[0]} ${user_name[1]}`
                     }
                  </strong>
                  <p className="Info__Changes">
                     Изменение за январь: <b className="Income">+12%</b>
                  </p>
               </div>
            </div>
            <div className="Notification">{notification}</div>
         </div>
         <div className="Accounts">
            {accounts.map(el => {
               return (
                  <div key={el.index}
                     className="Accounts__Item" style={{ backgroundColor: el.background }}>
                     <strong>{`${el.value} ₽`.replace('.', ',')}</strong>
                     <small>{el.type}</small>
                  </div>
               )
            })}
            {console.log(accounts)}
         </div>
         <div className="Buttons">
            <Button text='Создать запись' />
         </div>
      </div>
   )
}

export default Profile