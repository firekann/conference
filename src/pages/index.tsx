import * as React from "react"
import Layout from '../components/Layout';
import {Title, Time, Location, Link, SessionTitle, Divider, ApplicationLabel} from '../common.styles';
import { useFetchSession } from '../hooks/useFetchSession';
import SessionList from '../components/SessionList';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2023</Title>
      <Time dateTime={'2023-02-26 13:00:00'}>2023년 2월 26일 13시</Time>
      <Location>토즈 강남토즈타워점 <a href="https://map.naver.com/v5/entry/place/21660996">[N]</a> <a href="https://place.map.kakao.com/17206019">[K]</a></Location>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions}/>

    </Layout>
    )
}

export default IndexPage
