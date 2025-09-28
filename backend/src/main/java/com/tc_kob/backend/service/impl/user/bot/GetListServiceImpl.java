package com.tc_kob.backend.service.impl.user.bot;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.tc_kob.backend.mapper.BotMapper;
import com.tc_kob.backend.pojo.Bot;
import com.tc_kob.backend.pojo.User;
import com.tc_kob.backend.service.impl.utils.UserDetailsImpl;
import com.tc_kob.backend.service.user.bot.GetListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class GetListServiceImpl implements GetListService {
    @Autowired
    private BotMapper botMapper;

    @Override
    public List<Bot> getList() {
        UsernamePasswordAuthenticationToken auth =
                (UsernamePasswordAuthenticationToken) SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl loginUser = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = loginUser.getUser();

        QueryWrapper<Bot> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", user.getId());

        return botMapper.selectList(queryWrapper);
    }
}
