USE `practice_db`;
DROP TABLE IF EXISTS `todolist`;
CREATE TABLE IF NOT EXISTS `todolist` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    todo_name TEXT NOT NULL, -- 할일 명
    cert_date DATE NOT NULL, -- 인증 일자
    is_checked TINYINT NOT NULL DEFAULT 0, -- 임시글 유무
		is_deleted TINYINT NOT NULL DEFAULT 0, -- 삭제 여부
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 생성일
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- 수정일
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;;

INSERT INTO `todolist` (todo_name, cert_date) VALUES ('test', curdate())
