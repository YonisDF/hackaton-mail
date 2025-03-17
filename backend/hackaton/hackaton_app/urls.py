from django.urls import path
from .endpoints.Mail_endpoints import *
from .endpoints.Domain_endpoints import *

urlpatterns = [
    # Mail
    path("mail/list/", MailListView.as_view(), name="mail_list"),
    path("mail/<int:id>", MailGetByIDView.as_view(), name="mail_by_id"),
    path("mail/delete/<int:id>", MailDeleteView.as_view(), name="mail_delete"),
    path("mail/create/", MailCreateView.as_view(), name="mail_create"),
    path(
        "mail/quarantine/list/",
        MailQuarantineView.as_view(),
        name="mail_quarantine_list",
    ),
    path(
        "mail/quarantine/add/<int:id>",
        MailAddToQuarantineView.as_view(),
        name="mail_quarantine_add",
    ),
    path(
        "mail/quarantine/delete/<int:id>",
        MailRemoveFromQuarantineView.as_view(),
        name="mail_quarantine_delete",
    ),
    # Domain
    path("domain/list/", DomainListView.as_view(), name="domain_list"),
    path("domain/<int:id>", DomainListView.as_view(), name="domain_by_id"),
    path("domain/delete/<int:id>", DomainDeleteView.as_view(), name="domain_delete"),
    path("domain/create/", DomainCreateView.as_view(), name="domain_create"),
    path(
        "domain/blacklist/list/",
        DomainBlacklistedView.as_view(),
        name="domain_blacklist_list",
    ),
    path(
        "domain/blacklist/add/",
        DomainAddToBlacklistView.as_view(),
        name="domain_blacklist_add",
    ),
    path(
        "domain/blacklist/delete/",
        DomainRemoveFromBlacklistView.as_view(),
        name="domain_blacklist_delete",
    ),
    path(
        "domain/whitelist/list/",
        DomainWhitelistedView.as_view(),
        name="domain_whitelist_list",
    ),
    path(
        "domain/whitelist/add/",
        DomainAddToWhitelistView.as_view(),
        name="domain_whitelist_add",
    ),
    path(
        "domain/whitelist/delete/",
        DomainRemoveFromWhitelistView.as_view(),
        name="domain_whitelist_delete",
    ),
]
