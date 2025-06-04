import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/Logo.svg'
import { LogoStyle } from '@/styles/LogoStyle'
import Wrapper from '@/styles/Wrapper'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { SignText, TextButton } from '@/components/SignText'
import { login } from '@/api/auth'

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login({ username, password });
      alert('로그인 성공!');
      navigate('/main');
    } catch (err) {
      console.error('로그인 실패:', err.response?.data || err.message);
      alert('로그인 실패!');
    }
  };

  return (
    <Wrapper marginBottom>
      <LogoStyle src={Logo} />
      <Input placeholder='ID' value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder='PASSWORD' value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      {/* 우선 메인 이동으로만 연결 */}
      <Button onClick={handleLogin} >Login</Button>

      <SignText color="#99BC85">회원이 아니신가요?
        <TextButton onClick={() => navigate('/join')}> 회원가입</TextButton>
      </SignText>
    </Wrapper>
  )
}
