import Link from 'next/link';

export const metadata = {
  title: "Get Repo - Your AI powered online reputation management platform",
  description: "Get Repo your online reputation management platform to improve your online ratings, get more positive reviews, challenge and dispute negative reviews, run surveys and get more feedback from customer",
};

export default function Contact() {
  return (
    <div className="h-screen flex flex-col items-center justify-center"  style={{ backgroundImage: "url('/white-backdrop.png')", backgroundRepeat: "repeat", backgroundSize: "1440px" }}>
      <iframe className="pt-8 w-100 h-[46rem]"src="https://cdn.forms-content-1.sg-form.com/54cabf6c-fea2-11ef-a701-da2c7438c034"/>
    </div>
  );
}