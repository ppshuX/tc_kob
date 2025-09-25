package com.tc_kob.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.tc_kob.backend.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
