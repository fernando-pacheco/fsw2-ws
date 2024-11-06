from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
    

class TransacoesModel(models.Model):
    tipos_transacao = [
        ("DEPOSITO", "Depósito"),
        ("GASTO", "Gasto"),
        ("INVESTIMENTO", "Investimento"),
    ]
    
    categorias_transacao = [
        ("DOMESTICO", "Doméstico"),
        ("TRANSPORTE", "Transporte"),
        ("COMIDA", "Comida"),
        ("ENTRETENIMENTO", "Entretenimento"),
        ("SAUDE", "Saúde"),
        ("UTILIDADE", "Utilidade"),
        ("SALARIO", "Salário"),
        ("EDUCACAO", "Educação"),
        ("OUTRO", "Outro"),
    ]
    
    metodos_pagamento = [
        ("CREDITO", "Cartão de Crédito"),
        ("DEBITO", "Cartão de Débito"),
        ("TRANSFERENCIA", "Transferência Bancária"),
        ("BOLETO", "Boleto Bancário"),
        ("DINHEIRO", "Dinheiro"),
        ("PIX", "PIX"),
        ("OUTRO", "Outro"),
    ]
    
    nome = models.CharField(max_length=100)
    valor = models.FloatField()
    data = models.DateField()
    data_criacao = models.DateTimeField(default=datetime.now())
    data_atualizacao = models.DateTimeField(default=datetime.now())
    tipo = models.CharField(max_length=20, choices=tipos_transacao, default="")
    categoria = models.CharField(max_length=20, choices=categorias_transacao, default="")
    metodo_pagamento = models.CharField(max_length=20, choices=metodos_pagamento, default="")
    user = models.ForeignKey(User, related_name="transacoes", on_delete=models.CASCADE)
    
    def __str__(self):
        return self.nome
