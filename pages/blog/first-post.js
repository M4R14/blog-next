import React from 'react'
import Layout from './../../components/Layout';

export default class FirstPost extends React.Component  {
    static async getInitialProps() {
        return {}
    }
    render() {
        return (
            <Layout>
                <h1>ติดตั้ง Laravel ด้วย Docker สำหรับ Dev</h1>
                <br></br>
                <p>วิธีที่ผมใช้นี้มีแค่ Docker ก็เพียงพอแล้ว สำหรับการเริ่มต้นโปรเจค</p>
                <ol>
                    <li>
                        <p>ติดตั้ง Laravel ด้วย</p>
                        <pre className="p-2 bg-dark text-light"> 
                            $ docker run --rm --interactive --tty \\  <br />
                                --volume $PWD:/app \\  <br />
                                composer create-project --prefer-dist laravel/laravel laravel-blog
                        </pre>
                    </li>
                    <li>
                        <p>
                            เข้า <a href="https://phpdocker.io/generator">phpdocker.io</a>  เพื่อสร้างไฟล์ <i>`docker-compose.yml`</i> ตั้งชื่อโปรเจค <b>“laravel-blog”</b>
                        </p>
                        <ul className="p-2 bg-dark text-light">
                            <li>
                                Global configuration
                                <ul>
                                    <li> Project name : laravel-blog</li>
                                    <li> Base port: 8080</li>
                                </ul>
                            </li>
                            <li>
                                PHP configuration
                                <ul>
                                    <li>PHP Version: 7.2.x</li>
                                    <li>Extensions (PHP 7.2.x): MySQL, Bcmath, GD</li>
                                </ul>
                            </li>
                            <li>
                                MySQL
                                <ul>
                                    <li>Enable MySQL</li>
                                    <li>
                                        Version: 5.7
                                        <ul>
                                            <li>Root Password: toor</li>
                                            <li>Database Name: admin_laravel_blog</li>
                                            <li>Database Username: admin_laravel_blog</li>
                                            <li>Database Password: 123456</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p>แล้วกด “Generate project archive” จะได้รับ “laravel-blog.zip”</p>
                    </li>
                    <li>
                        <p>แตกไฟล์ laravel-blog.zip</p>
                        <pre className="p-2 bg-dark text-light" >
                            $ unzip laravel-blog.zip <br />
                            $ mv laravel-blog/* /{`<project_path>`}/aravel-blog
                        </pre>
                    </li>
                    <li>
                        <p>แก้ไข้ .env</p>
                        <pre className="p-2 bg-dark text-light" >
                            DB_CONNECTION=mysql <br />
                            DB_HOST=msql <br />
                            DB_PORT=3306 <br />
                            DB_DATABASE=admin_laravel_blog <br />
                            DB_USERNAME=admin_laravel_blog <br />
                            DB_PASSWORD=1234 <br />
                        </pre>
                    </li>
                    <li>
                        <p>เปิด server project ด้วยคำสั่ง `$ docker-compose up`</p>
                    </li>
                    <li>
                        <p>รันคำสั่ง `$ docker-compose exec php-fpm php artisan migate`</p>
                    </li>
                    <li>
                        <p>เปิด Browser “http:/127.0.0.1:8080”</p>
                    </li>
                </ol>
            </Layout>
        );
    }
}