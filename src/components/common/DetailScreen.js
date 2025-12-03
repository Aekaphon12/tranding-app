import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { componentStyles } from '../../styles/componentStyles';
import { sectionStyles } from '../../styles/sectionStyles';
import { BulletList } from './BulletList';

export const DetailScreen = ({ data, onBack }) => {
  if (!data) return null;

  return (
    <View style={componentStyles.detailWrapper}>
      <TouchableOpacity style={componentStyles.detailBack} onPress={onBack}>
        <Ionicons name="chevron-back" size={18} color="#46e0a0" />
        <Text style={componentStyles.detailBackText}>กลับไปหน้าเดิม</Text>
      </TouchableOpacity>
      <LinearGradient colors={data.heroColors || ['#141828', '#070910']} style={componentStyles.detailHero}>
        <Text style={componentStyles.detailTag}>{data.tag}</Text>
        <Text style={componentStyles.detailTitle}>{data.title}</Text>
        <Text style={componentStyles.detailSubtitle}>{data.subtitle}</Text>
      </LinearGradient>
      {data.metrics && (
        <View style={componentStyles.detailMetricRow}>
          {data.metrics.map((metric) => (
            <View key={metric.label} style={componentStyles.detailMetric}>
              <Text style={componentStyles.detailMetricValue}>{metric.value}</Text>
              <Text style={componentStyles.detailMetricLabel}>{metric.label}</Text>
            </View>
          ))}
        </View>
      )}
      {data.sections?.map((section) => (
        <View key={section.title} style={sectionStyles.section}>
          <Text style={sectionStyles.sectionTitle}>{section.title}</Text>
          {section.bullets && <BulletList items={section.bullets} />}
          {section.cards &&
            section.cards.map((card) => (
              <View key={card.title} style={[componentStyles.detailCard, card.accent && { borderColor: card.accent }]}>
                <Text style={componentStyles.detailCardTitle}>{card.title}</Text>
                <Text style={componentStyles.detailCardDesc}>{card.description}</Text>
                {card.stats && (
                  <View style={componentStyles.detailCardStats}>
                    {card.stats.map((stat) => (
                      <Text key={stat} style={componentStyles.detailCardStatText}>{stat}</Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          {section.steps &&
            section.steps.map((step, index) => (
              <View key={`${section.title}-${index}`} style={componentStyles.stepRow}>
                <View style={componentStyles.stepIndex}>
                  <Text style={componentStyles.stepIndexText}>{index + 1}</Text>
                </View>
                <Text style={componentStyles.stepText}>{step}</Text>
              </View>
            ))}
        </View>
      ))}
      {data.cta && (
        <TouchableOpacity style={componentStyles.detailCta} onPress={onBack}>
          <Text style={componentStyles.detailCtaText}>{data.cta}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
