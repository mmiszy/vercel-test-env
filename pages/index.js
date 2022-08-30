export default function Home() {
  return (
    <ul>
      <li>process.env.TEST_VARIABLE: {process.env.TEST_VARIABLE}</li>
      <li>process.env.NEXT_PUBLIC_TEST_VARIABLE: {process.env.NEXT_PUBLIC_TEST_VARIABLE}</li>
      <li>process.env.TEST_COPY: {process.env.TEST_COPY}</li>
      <li>process.env.NEXT_PUBLIC_TEST_COPY: {process.env.NEXT_PUBLIC_TEST_COPY}</li>
      <li>process.env.TEST_INTERPOLATION: {process.env.TEST_INTERPOLATION}</li>
      <li>process.env.NEXT_PUBLIC_TEST_INTERPOLATION: {process.env.NEXT_PUBLIC_TEST_INTERPOLATION}</li>
    </ul>
  )
}
