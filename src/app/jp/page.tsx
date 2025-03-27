import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Briefcase,
    Code,
    GraduationCap,
    Award,
    Languages,
    ChevronRight,
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
    SquareTerminal
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
    SiAmazondynamodb,
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiAmazonapigateway,
    SiPostgresql,
    SiMongodb,
    SiApachecassandra,
    SiUnrealengine,
    SiDotnet,
    SiUnity,
    SiElectron,
    SiGit,
    SiGithub,
    SiDocker,
    SiPerforce,
    SiLinux,
    SiUbuntu,
    SiTerraform,
    SiAmazonwebservices,
    SiAwslambda,
    SiPython,
    SiC,
    SiCplusplus,
    SiKotlin,
    SiSharp, SiAndroid
} from '@icons-pack/react-simple-icons';
import type {Metadata} from "next";
import {GradientShift} from "@/components/attention-buttons";

export const metadata: Metadata = {
    title: "ポートフォリオ - Payman Ahmadpour",
    description: "Payman Ahmadpourに作られたポートフォリオ・ウェブサイト",
};

const experiences = [
    {
        role: "XR Technical Artist",
        company: "Applied Medical",
        period: "９月2021年 - １月2025年",
        responsibilities: [
            "私が指導していた小さいチームはUnreal EngineでVR研修ソフトを開発しました。",
            "全てのVRソフトを動かす再利用可能なC++ソースコードを作りました。",
            "チームが使っている基礎的なブループリントクラスと関数を設けました。",
            "それぞれの研修ソフトが現実感と同じなのかを確認する責任がありました。",
            "動画にタグ付けをして保管と振り返りをしやすくするためのReactでのソフトとCLIツールを開発しました。",
            "Perforceでバージョン管理システムを設けました。"
        ],
    },
]

const projects = [
    {
        title: "Kuraiji.me - E-commerce Platform",
        description: "アマゾンみたいな買い物するウエブサイト",
        image: "./shopping.png",
        technologies: ["React", "Next.js", "Tailwind CSS", "AWS Gateway", "AWS Lambda", "Amazon DynamoDB"],
        demoLink: "https://www.kuraiji.me/",
        codeLink: "https://github.com/kuraiji/crud-website",
    },
    {
        title: "Speedy Playlist Creator for Android",
        description: "音楽ファイルのために速くプレイリストを作る",
        image: "./music.png",
        technologies: ["Kotlin", "Android"],
        codeLink: "https://github.com/kuraiji/speedyplaylistcreatorandroid",
    },
    {
        title: "Ice Mage Adventures",
        description: "若い魔法使いの大冒険の始まり。魔法の玄人になる前に十五つの受験を生き延びて、師匠も倒さないといけません。",
        image: "./icemage.png",
        technologies: ["GDScript"],
        demoLink: "https://tripletrouble.itch.io/ice-mage-adventures",
        codeLink: "https://github.com/kuraiji/Triple-Trouble-LD41"
    },
]

const skillCategories = [
    {
        name: "フルスタック開発",
        skills: [
            ["HTML", <SiHtml5 key={"HTML"}/>],
            ["CSS", <SiCss key={"CSS"}/>],
            ["React", <SiReact key={"REACT"}/>],
            ["Next.js", <SiNextdotjs key={"NEXT"}/>],
            ["Tailwind CSS", <SiTailwindcss key={"TAIL"}/>],
            ["レスポンシブデザイン"],
            ["Node.js", <SiNodedotjs key={"NODE"}/>],
            ["RESTful APIs", <SiAmazonapigateway key={"API"}/>],
            ["Amazon DynamoDB", <SiAmazondynamodb key={"AmazonDynamoDB"}/>],
            ["PostgreSQL", <SiPostgresql key={"PostgreSQL"}/>],
            ["MongoDB", <SiMongodb key={"MongoDB"}/>],
            ["Apache Cassandra", <SiApachecassandra key={"ApacheCassandra"}/>],
        ],
    },
    {
        name: "ソフトとゲーム開発",
        skills: [
            ["Unreal Engine", <SiUnrealengine key={"Unreal Engine"}/>],
            ["ASP.Net Core", <SiDotnet key={"ASP.Net Core"}/>],
            ["Unity", <SiUnity key={"Unity"}/>],
            ["CLI ツール", <SquareTerminal key={"CLI Tooling"}/>],
            ["Electron", <SiElectron key={"Electron"}/>],
            ["Android", <SiAndroid key={"Android"}/>],
        ],
    },
    {
        name: "デブオプスとクラウドと他にも",
        skills: [
            ["指導"],
            ["Git", <SiGit key={"Git"}/>],
            ["GitHub", <SiGithub key={"GitHub"}/>],
            ["CI/CD"],
            ["Docker", <SiDocker key={"Docker"}/>],
            ["Perforce", <SiPerforce key={"Perforce"}/>],
            ["Linuxサーバ", <SiLinux key={"Linux"}/>],
            ["Ubuntuサーバ", <SiUbuntu key={"Ubuntu"}/>],
            ["Terraform", <SiTerraform key={"Terraform"}/>],
            ["Amazon Web Services", <SiAmazonwebservices key={"AmazonWebServices"}/>],
            ["AWS Lambda", <SiAwslambda key={"AWS Lambda"}/>],
            ["クラウド設計"],
            ["クラウド基盤"]
        ],
    },

]

const education = [
    {
        degree: "Bachelor of Sciences in Computer Science",
        institution: "University of California, Irvine",
        //period: "2019 - 2021",
        description:
            "単位にはデータ構造とアルゴリズムとデータベースシステムと対象型プログラミングを含めた。",
    },
]

const certificates = [
    {
        name: "AWS 認定ソリューションアーキテクト - アソシエイト",
        issuer: "Amazon Web Services",
        date: "2025",
        description: "コストとパフォーマンスが最適化されたソリューションの設計に重点を置いています。これは、AWS クラウドまたはオンプレミス IT での経験が豊富な受験者にとって理想的な出発点です。この試験にコーディングの深い実務経験は必要ありませんが、基本的なプログラミングの概念を熟知していると有利です。",
        credentialLink: "https://www.credly.com/badges/73699102-0cdf-4bb4-859b-72cf8ddc6a7a",
    },
]

const spokenLanguages = [
    { name: "英語", proficiency: "ネイティブ" },
    { name: "日本語", proficiency: "上級" },
]

const programmingLanguages = [
    ["JavaScript", <SiJavascript key={"JavaScript"}/>],
    ["TypeScript", <SiTypescript key={"TypeScript"}/>],
    ["Python", <SiPython key={"Python"}/>],
    ["SQL"],
    ["C#", <SiSharp key={"C#"}/>],
    ["C++", <SiCplusplus key={"C++"}/>],
    ["C", <SiC key={"C"}/>],
    ["Kotlin", <SiKotlin key={"Kotlin"}/>],
]

export default function Home() {
    return (
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center bg-background">
            {/* Header/Navigation */}
            <header className="sticky top-0 z-40 w-full flex justify-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex flex-row h-16 items-center justify-between min-w-full">
                    <div className="font-bold text-xl ml-4">Payman Ahmadpour</div>
                    <nav className="hidden md:flex gap-6">
                        <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                            経験
                        </a>
                        <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                            プロジェクト
                        </a>
                        <a href="#languages" className="text-sm font-medium hover:text-primary transition-colors">
                            言語
                        </a>
                        <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                            能力
                        </a>
                        <a href="#education" className="text-sm font-medium hover:text-primary transition-colors">
                            教育
                        </a>
                        <a href="#certificates" className="text-sm font-medium hover:text-primary transition-colors">
                            資格
                        </a>
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                            English
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4 mr-4">
                        <a href="https://github.com/kuraiji" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/paymanahmadpour" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:paymanahmadpour@outlook.com" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                        <Link href="./Ahmadpour-Japan_Resume_CV.pdf">
                            <Button size="sm" className="hidden hover:cursor-pointer md:flex ">
                                履歴書をダウンロードする
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="container py-10">
                {/* Hero Section */}
                <section className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">こんにちは、Payman Ahmadpourです。</h1>
                        <p className="text-xl text-muted-foreground">
                            デスクトップとモバイルとウェブとVRを含めた複数の領域である3年以上経験を持っているフルスタックとソフト開発者です。クラウド基盤と開発に移行するのを集中しています。多様な履歴と問題解決能力のおかげでいつも変わっている業界にある新たな挑戦を扱えます。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Button asChild>
                                <a href="#contact">Contact Me</a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href="#projects">View Projects</a>
                            </Button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                            <Image
                                src="./me.jpg"
                                alt="Payman Ahmadpour"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>
                {/* Experience Section */}
                <section id="experience" className="py-12 scroll-mt-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Briefcase className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">経験</h2>
                    </div>
                    <div className="space-y-8">
                        {experiences.map((experience, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <div>
                                            <CardTitle>{experience.role}</CardTitle>
                                            <CardDescription className="text-base">{experience.company}</CardDescription>
                                        </div>
                                        <Badge variant="outline" className="w-fit">
                                            {experience.period}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {experience.responsibilities.map((responsibility, idx) => (
                                            <li key={idx}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* Projects Section */}
                <section id="projects" className="py-12 scroll-mt-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Code className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">プロジェクト</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <Card key={index} className="overflow-hidden flex flex-col h-full">
                                <div className="relative h-48 w-full">
                                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, idx) => (
                                            <Badge key={idx} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <div className="p-6 pt-0 mt-auto">
                                    <div className="flex gap-4">
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className=""
                                            >
                                                <GradientShift
                                                    className="flex flex-row items-center gap-1 hover:cursor-pointer relative z-10"
                                                    size="sm"
                                                >
                                                    <p>Demo</p>
                                                    <ArrowUpRight className="h-4 w-4" />
                                                </GradientShift>
                                            </a>
                                        )}
                                        {project.codeLink && (
                                            <Button variant="outline" size="sm" asChild>
                                                <a
                                                    href={project.codeLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1"
                                                >
                                                    Code <Github className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* Languages Section */}
                <section id="languages" className="py-12 scroll-mt-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Languages className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">言語</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>自然言語</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {spokenLanguages.map((language, index) => (
                                        <li key={index} className="flex justify-between items-center">
                                            <span>{language.name}</span>
                                            <Badge variant="outline">{language.proficiency}</Badge>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>プログラミング言語</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {programmingLanguages.map((language, index) => (
                                        <Badge key={index} className="px-3 py-1">
                                            <>
                                                {language[0]}
                                                {language[1]}
                                            </>
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
                {/* Skills Section */}
                <section id="skills" className="py-12 scroll-mt-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Code className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">能力</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{category.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, idx) => (
                                            <Badge key={idx} className="px-3 py-1">
                                                <>
                                                    {skill[0]}
                                                    {skill[1]}
                                                </>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* Education Section */}
                <section id="education" className="py-12 scroll-mt-20">
                    <div className="flex items-center gap-2 mb-8">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">教育</h2>
                    </div>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                        <div>
                                            <CardTitle>{edu.degree}</CardTitle>
                                            <CardDescription className="text-base">{edu.institution}</CardDescription>
                                        </div>
                                        {/*<Badge variant="outline" className="w-fit">
                          {edu.period}
                        </Badge>*/}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p>{edu.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* Certificates Section */}
                <section id="certificates" className="py-12 scroll-mt-20">
                    <div className="flex items-center gap-2 mb-8">
                        <Award className="h-6 w-6 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight">資格</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certificates.map((certificate, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle>{certificate.name}</CardTitle>
                                    <CardDescription>
                                        {certificate.issuer} • {certificate.date}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{certificate.description}</p>
                                    {certificate.credentialLink && (
                                        <Link
                                            href={certificate.credentialLink}
                                            className="inline-flex items-center text-primary mt-2 hover:underline"
                                            target="_blank"
                                        >
                                            View Credential <ChevronRight className="h-4 w-4" />
                                        </Link>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                {/* Contact Section */}
                <section id="contact" className="py-12 scroll-mt-20">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">お話ししましょう</CardTitle>
                            <CardDescription>
                                開発者を探すか聞きたいことがあるか話し合いたければ、お話ししましょう。
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <a href="mailto:paymanahmadpour@outlook.com" className="hover:underline">
                                            paymanahmadpour@outlook.com
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Linkedin className="h-5 w-5 text-primary" />
                                        <a
                                            href="https://linkedin.com/in/paymanahmadpour"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            linkedin.com/in/paymanahmadpour
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Github className="h-5 w-5 text-primary" />
                                        <a
                                            href="https://github.com/kuraiji"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            github.com/kuraiji
                                        </a>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <Link href="./Ahmadpour-Japan_Resume_CV.pdf">
                                        <Button className="w-full hover:cursor-pointer">
                                            履歴書をダウンロードする
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>
            <footer className="border-t py-6">
                <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Payman Ahmadpour. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/kuraiji" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com/in/paymanahmadpour" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="mailto:paymanahmadpour@outlook.com" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}