package com.tc_kob.backend.service.impl.user.account;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.tc_kob.backend.mapper.UserMapper;
import com.tc_kob.backend.pojo.User;
import com.tc_kob.backend.service.user.account.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RegisterServiceImpl implements RegisterService {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Map<String, String> register(String username, String password, String password_confirm) {
        Map<String, String> map = new HashMap<String, String>();

        if (username == null || username.trim().isEmpty()) {
            map.put("error_message", "用户名不能为空");
            return map;
        }

        if (password == null || password_confirm == null || password.isEmpty() || password_confirm.isEmpty()) {
            map.put("error_message", "密码不能为空");
            return map;
        }

        username = username.trim();

        if (username.length() > 100) {
            map.put("error_message", "用户名长度不能大于100");
            return map;
        }

        if (!password.equals(password_confirm)) {
            map.put("error_message", "两次密码不一致");
            return map;
        }

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("username", username);
        List<User> users = userMapper.selectList(queryWrapper);
        if (!users.isEmpty()) {
            map.put("error_message", "用户名已存在");
            return map;
        }

        String encodePassword = passwordEncoder.encode(password);
        String photo = "https://img0.baidu.com/it/u=2272351425,2607408297&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=987";
        User user = new User(null, username, encodePassword, photo, 1500);
        userMapper.insert(user);

        map.put("error_message", "success");
        return map;
    }
}
