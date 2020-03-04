package com.cts.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.cts.model.CustomerDetails;
import com.cts.model.RechargePackage;
import com.cts.service.RechargeService;
@Controller
public class RechargeController {
	@Autowired
	private RechargeService rechargeService;
	@RequestMapping("/")
	public ModelAndView show() {
		CustomerDetails customerDetails=new CustomerDetails();
		ModelAndView modelAndView=new ModelAndView("index");
		modelAndView.addObject("customerDetails",customerDetails);
		return modelAndView;
	}
	@RequestMapping("/check")
	public String checkStatus(@ModelAttribute("customerDetails") CustomerDetails customerDetails,Model model) {
		String viewName=null;
		String carrierType=customerDetails.getCarrier();
		boolean active=rechargeService.checkStatus(customerDetails);
		System.out.println(active);
		if(active)
		{
			model.addAttribute("msg","Your mobile validity is not expired");
			viewName="index";
		}
		else
		{
			List<RechargePackage> rechargePackages=rechargeService.getAllPackages(carrierType);
			model.addAttribute("packages",rechargePackages);
			viewName="list";
		}
		return viewName;
	}
}
