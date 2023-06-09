import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgImg from '../assets/imgs/bg/gradient.jpg';

const Rules = () => {
  return (
    <main className='account'>
      <img src={bgImg} alt="bgImg" className='account-bg'/>
      <Container>
        <section className='rules mb-md-5'>
          <Row className='justify-content-center'>
            <Col xs={12} xl={11} xxl={10}>
              <div className='topic mb-5'>
                <h1 className='h2 mb-0'>Правила</h1>
              </div>

              <h3 className='mb-4'>Правила для продавцов</h3>
              <div className='list-wrapping mb-5'>
                <div className='list-wrapping-top px-5 py-4'>
                  <Row className='gx-5' lg={2}>
                    <Col><h4 className='mb-0'>Нарушение</h4></Col>
                    <Col><h4 className='mb-0'>Санкции</h4></Col>
                  </Row>
                </div>
                <div className='list-wrapping-main p-5'>
                  <Row className='gx-5' lg={2}>
                    <Col>Размещение объявлений на других биржах. При этом разрешается размещать объявления на форумах, продавать в магазины и т. д.</Col>
                    <Col>Блокировка аккаунта. Отказ в выплатах.</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Попытка передачи товара или оказания услуги без проведения платежа через FunPay. Обмен товарами или услугами.</Col>
                    <Col>Блокировка всех аккаунтов. Отказ в выплатах. Блокировка всех новых аккаунтов нарушителя по мере их обнаружения.</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Просьба к покупателю о подтверждении заказа до его фактического выполнения (при отсутствии признаков обмана).</Col>
                    <Col>Предупреждение или временная блокировка аккаунта. Отключение мгновенного вывода (при наличии).</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Обсуждение с покупателем комиссии сайта или цены, указанной продавцом. Разрешено обсуждение только той цены, которую видит покупатель.</Col>
                    <Col>Предупреждение.</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Продажа товаров, полученных неправомерным путём (взломом, брутом, кардингом и т. д.). Продажа персональных данных. Обучение неправомерной деятельности или продажа информации о ней.</Col>
                    <Col>Блокировка аккаунта и последующее прохождение процедуры идентификации для получения выплаты с него в течение 30 дней.</Col>
                  </Row>
                  <hr className='mb-0' />
                </div>
              </div>

              <h3 className='mb-4'>Правила для продавцов и покупателей</h3>
              <div className='list-wrapping mb-5'>
                <div className='list-wrapping-top px-5 py-4'>
                  <Row lg={2}>
                    <Col><h4 className='mb-0'>Нарушение</h4></Col>
                    <Col><h4 className='mb-0'>Санкции</h4></Col>
                  </Row>
                </div>
                <div className='list-wrapping-main'>
                  <Row className='gx-5' lg={2}>
                    <Col>Передача другому пользователю контактных данных (Skype, Discord, ВКонтакте, телефон и др.) любым способом. Использование контактных данных, полученных от другого пользователя. Связь в игре после выполнения заказа.</Col>
                    <Col>Временная блокировка при первом и незлонамеренном нарушении. Блокировка аккаунта и отказ в выплатах при повторном нарушении.</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Недобросовестное использование системы отзывов (накрутка, шантаж, безосновательное изменение отзыва по старому заказу и т. д.).</Col>
                    <Col>Удаление отзыва. Блокировка аккаунта при повторном нарушении (без отказа в выплатах).</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Недобросовестное использование системы отзывов (накрутка, шантаж, безосновательное изменение отзыва по старому заказу и т. д.).</Col>
                    <Col>Блокировка всех аккаунтов. Отказ в выплатах. Блокировка всех новых аккаунтов нарушителя по мере их обнаружения.</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Попытка покупки или продажи аккаунта .</Col>
                    <Col>Блокировка всех аккаунтов (без отказа в выплатах).</Col>
                  </Row>
                  <hr />
                  <Row className='gx-5' lg={2}>
                    <Col>Использование своего аватара нетрадиционным способом (текст, реклама, акции и др.). Размещение на аватаре противозаконной или политической информации (флаги, исторические деятели и т. д.).</Col>
                    <Col>Удаление аватара. Блокировка аккаунта при повторном нарушении (без отказа в выплатах).</Col>
                  </Row>
                  <hr className='mb-0'/>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
};

export default Rules;