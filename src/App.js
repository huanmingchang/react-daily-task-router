import './App.css'
import {
  HashRouter,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useParams,
  Outlet,
} from 'react-router-dom'

const Home = () => {
  return <p>這是首頁</p>
}
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <Logout />
    </>
  )
}
const Login = () => {
  return <p>這是登入頁面</p>
}

const Logout = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/login')} style={{ padding: '1rem' }}>
      Logout
    </button>
  )
}
const Register = () => {
  return <p>這是註冊頁面</p>
}

const Post = () => {
  const id = [123, 456, 789, 111, 222, 333]
  return (
    <>
      <p>這是 Post 頁面</p>
      <div
        style={{
          display: 'flex',
        }}
      >
        {id.map((item, i) => {
          return (
            <>
              {
                <NavLink key={i} to={`/post/post${item}`}>
                  <p style={{ marginRight: '1rem' }}>Post {item} 詳細頁面</p>
                </NavLink>
              }
            </>
          )
        })}
      </div>
      <Outlet />
    </>
  )
}

const PostId = () => {
  const { postId } = useParams()
  return <p>Post: {postId}</p>
}

function App() {
  return (
    <div className='container'>
      <HashRouter>
        <div className='nav-link'>
          <NavLink to='/'>
            <p>回到首頁</p>
          </NavLink>
          <NavLink to='/register'>
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to='/login'>
            <p>登入頁面</p>
          </NavLink>
          <NavLink to='/todo'>
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to='/post'>
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/post' element={<Post />}>
            <Route path=':postId' element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  )
}

export default App
